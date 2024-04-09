import { reverseGeocodeAsync } from 'expo-location'

type Props = {
  latitude: number;
  longitude: number;
}

export async function getLocation({ latitude, longitude }: Props) {
  try {
    const address = await reverseGeocodeAsync({ latitude, longitude });
    return address[0]?.street;
  } catch (error) {
    console.log(error)
  }
}