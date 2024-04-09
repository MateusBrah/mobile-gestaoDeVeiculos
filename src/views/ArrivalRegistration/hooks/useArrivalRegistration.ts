import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrivalRegistrationPropsT, LocationInfoPropsT } from "../../../@types/componentsProps";
import { useObject, useRealm } from "../../../realm";
import { GenerateProps, Historic } from "../../../realm/schemas/Historic";
import { BSON } from "realm";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { getLastSync } from "../../../hooks/asyncStorage/syncStorage";
import { stopLocationTask } from "../../../tasks/backgroundTaskLocation";
import { getStorageLocations } from "../../../hooks/asyncStorage/locationStorage";
import { LatLng } from "react-native-maps";
import { getLocation } from "../../../hooks/location/getLocation";
import dayjs from "dayjs";

export const useArrivalRegistration = () => {
  const [isLoading, setIsloading] = useState(true);
  const [sync, setSync] = useState(false);
  const [coordinates, setCoordinates] = useState<LatLng[]>([]);
  const [departure, setDeparture] = useState<LocationInfoPropsT>({} as LocationInfoPropsT)
  const [arrival, setArrival] = useState<LocationInfoPropsT | null>(null)
  const route = useRoute();
  const realm = useRealm()
  const { id } = route.params as ArrivalRegistrationPropsT;
  //@ts-ignore
  const historic = useObject(Historic, new BSON.UUID(id)) as Historic;
  const { goBack } = useNavigation();

  const handleCancel = () => {
    Alert.alert(
      "Atenção",
      "Deseja realmente cancelar ?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim", onPress: () => confirmCancel()
        }
      ]
    )
  }

  const confirmCancel = async () => {
    realm.write(() => {
      realm.delete(historic!);
    });
    await stopLocationTask();
    goBack()
  };

  const handleRegisterArrival = async () => {
    try {
      const locations = await getStorageLocations();
      realm.write(() => {
        historic!.status = "arrival";
        historic!.updatedAt = new Date();
        historic!.coords.push(...locations);
      });
      await stopLocationTask();
      Alert.alert("Obrigado", "Chegada registrada com sucesso.");
      goBack();
    } catch (error) {
      Alert.alert("Desculpe", "Ocorreu um erro ao tentar registrar a chegada.");
    }
  };

  const getLocationsInfo = async () => {
    if (!historic) {
      return;
    }
    const lastSync = await getLastSync();
    const updatedAt = historic!.updatedAt?.getTime();
    setSync(updatedAt < lastSync);
    if (historic?.status === 'departure') {
      const locationStorage = await getStorageLocations();
      setCoordinates(locationStorage);
    } else {
      setCoordinates(historic.coords ?? []);
    }

    if (historic?.coords[0]) {
      const departureStreetName = await getLocation(historic?.coords[0]);
      setDeparture({
        title: `Saída em ${departureStreetName ?? ''}`,
        description: dayjs(new Date(historic?.coords[0].timestamp)).format('DD/MM/YYYY [ás] HH:mm'),
      });

      if (historic?.status === 'arrival') {
        const lastLocation = historic?.coords[historic?.coords.length - 1];
        const arrivalStreetName = await getLocation(lastLocation);
        setArrival({
          title: `Chegada em ${arrivalStreetName ?? ''}`,
          description: dayjs(new Date(lastLocation.timestamp)).format('DD/MM/YYYY [ás] HH:mm'),
        });
      }
    }
    setIsloading(false);
  }

  useEffect(() => {
    getLocationsInfo();
  }, [historic])

  return { isLoading, historic, sync, coordinates, departure, arrival, handleCancel, handleRegisterArrival };
}
