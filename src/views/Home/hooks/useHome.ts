import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useUser } from '@realm/react';
import { Realm } from 'realm';
import { Historic } from "../../../realm/schemas/Historic";
import { useQuery, useRealm } from "../../../realm";
import { HistoricCardPropsT } from "../../../@types/componentsProps";
import { getLastSync, setLastSync } from "../../../hooks/asyncStorage/syncStorage";
import dayjs from "dayjs";

export const useHome = () => {
  const [carInUse, setCarInUse] = useState<Historic | null>(null);
  const [historicCar, setHistoricCar] = useState<HistoricCardPropsT[]>([]);
  const { navigate } = useNavigation();
  const user = useUser();
  const realm = useRealm();
  const historic = useQuery(Historic);

  const handleRegister = () => {
    if (carInUse?._id) {
      navigate('arrival', { id: carInUse._id.toString() });
    } else {
      navigate('registration')
    }
  }

  const fetchVehicleInUse = () => {
    const car = historic.filtered("status='departure'")[0];
    setCarInUse(car);
  }

  const fetchHistoric = async () => {
    const response = historic.filtered("status='arrival' SORT(createdAt ASC)");
    const lastSync = await getLastSync();
    const formattedHistoric = response.map((item) => ({
      id: item._id.toString(),
      plate: item.plate.toUpperCase(),
      isSync: lastSync > item.updatedAt?.getTime(),
      created: dayjs(item.createdAt).format('[Saída em] DD/MM/YYYY [às] HH:mm'),
    }));
    setHistoricCar(formattedHistoric);
  }

  const handleDetails = (id: string) => {
    navigate('arrival', { id })
  }

  const progressNotification = async (transferred: number, transferable: number) => {
    const percentage = (transferred / transferable) * 100;
    if (percentage === 100) {
      await setLastSync();
      fetchHistoric();
    }
  }

  useEffect(() => {
    fetchVehicleInUse();
  }, [])

  useEffect(() => {
    realm.addListener("change", () => fetchVehicleInUse());

    return () => {
      if (realm && !realm.isClosed) {
        realm.removeListener("change", fetchVehicleInUse);
      }
    };
  }, []);

  useEffect(() => {
    fetchHistoric();
  }, [historic]);

  useEffect(() => {
    realm.subscriptions.update((mutableSubs, realm) => {
      const historicByUserQuery = realm
        .objects("Historic")
        .filtered(`userId = '${user!.id}'`);

      mutableSubs.add(historicByUserQuery, { name: "historic_by_user" });
    });
  }, [realm]);

  useEffect(() => {
    const syncSession = realm.syncSession;
    if (!syncSession) {
      return;
    }
    syncSession.addProgressNotification(
      Realm.ProgressDirection.Upload,
      Realm.ProgressMode.ReportIndefinitely,
      progressNotification
    );
    return () => syncSession.removeProgressNotification(progressNotification);
  }, [])

  return { carInUse, historicCar, handleRegister, handleDetails };
};