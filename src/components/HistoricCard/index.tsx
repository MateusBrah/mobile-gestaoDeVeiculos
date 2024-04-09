import { Image } from 'react-native';
import { Container, Title, Text, Info } from './styles';
import { HistoricCardPropsT } from '../../@types/componentsProps';

export function HistoricCard({ historic, ...rest }: HistoricCardPropsT) {
  return (
    <Container {...rest}>
      <Info>
        <Title>
          {historic.plate}
        </Title>
        <Text>
          {historic.created}
        </Text>
      </Info>
      {historic.isSync ? (
        <Image
          source={require("../../assets/icons/IconCheck.png")}
          width={32}
          height={32}
        />
      ) : (
        <Image
          source={require("../../assets/icons/IconRefreshClock.png")}
          width={32}
          height={32}
        />
      )}
    </Container>
  );
}