import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Title } from './styles';
import { Image } from 'react-native';

export function OfflineTag() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 5;
  return (
    <Container style={{paddingTop}}>
      <Image
        source={require("../../assets/icons/IconOffline.png")}
        width={18}
        height={18}
      />
      <Title>
        Você está offline
      </Title>
    </Container>
  );
}