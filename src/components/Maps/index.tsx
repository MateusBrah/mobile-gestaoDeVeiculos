import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { MapProps } from "../../@types/componentsProps";
import { Image } from 'react-native';
import { Container } from "./styles";
import { useRef } from "react";
import { useTheme } from "styled-components/native";
import { Car, FlagCheckered } from "phosphor-react-native";

export function Map({ coordinates, ...rest }: MapProps) {
  const COLORS = useTheme();
  const mapRef = useRef<MapView>(null);
  const onMapLoaded = async () => {
    if (coordinates.length > 1) {
      mapRef.current?.fitToSuppliedMarkers(["departure", "arrival"], {
        edgePadding: {
          top: 100,
          right: 100,
          bottom: 100,
          left: 100
        }
      })
    }
  }
  const locationsWithoutTimestamp = coordinates.map(({ latitude, longitude }) => ({
    latitude,
    longitude,
  }));
  const lastCoordinate = locationsWithoutTimestamp[coordinates.length - 1]
  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={{
        width: '100%',
        height: 200
      }}
      region={{
        latitude: lastCoordinate.latitude,
        longitude: lastCoordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      onMapLoaded={onMapLoaded}
      {...rest}
    >
      <Marker identifier="departure" coordinate={locationsWithoutTimestamp[0]}>
        <Container>
          <Image
            source={require("../../assets/icons/IconCar.png")}
            style={{ width: 24, height: 24 }}
          />
        </Container>
      </Marker>
      {coordinates.length > 1 &&
        <>
          <Marker identifier="arrival" coordinate={lastCoordinate}>
            <Container>
              <Image
                source={require("../../assets/icons/IconFlag.png")}
                style={{ width: 24, height: 24 }}
              />
            </Container>
          </Marker>
          <Polyline
            coordinates={[...locationsWithoutTimestamp]}
            strokeColor={COLORS.GRAY_700}
            strokeWidth={5}
          />
        </>
      }
    </MapView>
  )
}