import { useEffect, useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '@realm/react';
import { useForm } from 'react-hook-form';
import {
  useForegroundPermissions,
  watchPositionAsync,
  LocationAccuracy,
  LocationSubscription,
  LocationObjectCoords,
  requestBackgroundPermissionsAsync,
} from 'expo-location';
import { ExitRegisterSchema, defaultValues, exitRegisterSchema } from "./FormSchema";
import { useRealm } from "../../../realm";
import { Historic } from "../../../realm/schemas/Historic";
import { getLocation } from "../../../hooks/location/getLocation";
import { startLocationTask } from "../../../tasks/backgroundTaskLocation";

export const useExitRegistration = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(false);
  const [userAddres, setUserAddres] = useState<string | null>();
  const [currentCoords, setCurrentCoords] = useState<LocationObjectCoords | null>(null);
  const descriptionRef = useRef<TextInput>(null);
  const { goBack } = useNavigation();
  const realm = useRealm();
  const user = useUser();

  const [locationPermission, requestLocationPermission] = useForegroundPermissions();

  const { control, formState: { errors }, handleSubmit } = useForm<ExitRegisterSchema>({
    defaultValues: defaultValues(),
    mode: 'onChange',
    resolver: zodResolver(exitRegisterSchema),
  });

  const submitForm = async (data: ExitRegisterSchema) => {
    try {
      if (!currentCoords?.latitude || !currentCoords?.longitude) {
        return Alert.alert("Desculpe", "Não foi possível obter a localização atual.");
      }
      setIsLoading(true);

      const backgroundPermission = await requestBackgroundPermissionsAsync();
      if (!backgroundPermission.granted) {
        setIsLoading(false);
        return Alert.alert("Desculpe", "Não foi possível obter a permissão para continuar em segundo plano.");
      }

      await startLocationTask();

      realm.write(() => {
        realm.create("Historic", Historic.generate({
          userId: user!.id,
          plate: data.plate.toLowerCase(),
          description: data.description,
          coords: [{
            latitude: currentCoords.latitude,
            longitude: currentCoords.longitude,
            timestamp: new Date().getTime(),
          }],
        }));
      });
      Alert.alert("Sucesso", "Boa viagem!");
      goBack();
    } catch (error) {
      Alert.alert("Desculpe", "Ocorreu um erro ao tentar registrar a saída.");
    }
  };

  const onError = () => {
    if (errors) {
      if (Object.keys(errors).length > 0) {
        const mensagensDeErro = Object.values(errors).map((erro: any) => erro.message).join("\n");
        Alert.alert("Desculpe", mensagensDeErro);
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, [])

  useEffect(() => {
    let subscription: LocationSubscription;
    if (!locationPermission?.granted) {
      return;
    }
    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
    }, (location) => {
      setCurrentCoords(location.coords);
      getLocation(location.coords).then((address) => {
        if (address) {
          setUserAddres(address);
        };
      })
        .finally(() => setIsLoadingLocation(false));
    }).then((response) => subscription = response);
    return () => subscription.remove();
  }, [locationPermission])

  return { descriptionRef, control, isLoading, locationPermission, isLoadingLocation, userAddres, currentCoords, onError, handleSubmit, submitForm }
}
