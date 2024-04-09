import { TextInputProps } from 'react-native';
import { MapViewProps, LatLng } from "react-native-maps"

export type ButtonPropsT = {
  title?: string;
  isLoading?: boolean;
  onPress: () => void;
}

export type HeaderPropsT = {
  title: string;
};

export type CarPlatePropsT = TextInputProps & {
  title: string;
  name: string;
  control: Control<any>;
};

export type CarStatusPropsT = TouchableOpacityProps & {
  plate?: string | null;
}

export type DescriptionPropsT = TextInputProps & {
  title: string;
  control: Control<any>;
  name: string;
  control: Control<any>;
}

export type ArrivalRegistrationPropsT = {
  id: string;
}

export type HistoricCardProps = {
  id: string;
  plate: string;
  created: string;
  isUpdated: boolean;
};

export type HistoricCardPropsT = TouchableOpacityProps & {
  historic: HistoricCardProps;
}

export type LocationInfoPropsT = {
  title: string;
  description: string;
};

export type MapProps = MapViewProps & {
  coordinates: LatLng[],
}