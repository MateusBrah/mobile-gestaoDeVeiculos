import { Container, Icon, Text, TextRegister } from './styles';
import { Image } from 'react-native';
import { useCarStatus } from './useCarStatus'
import { CarStatusPropsT } from '../../@types/componentsProps';

export function CarStatus({ plate, ...rest }: Readonly<CarStatusPropsT>) {
  const { message, status } = useCarStatus({ plate });
  return (
    <Container {...rest}>
      <Icon>
        {plate ?
          <Image
            source={require('../../assets/icons/IconCar.png')}
            width={32}
            height={32} />

          :
          <Image
            source={require('../../assets/icons/IconKey.png')}
            width={32}
            height={32} />
        }
      </Icon>
      <Text>
        {message}
        <TextRegister>
          {status}
        </TextRegister>
      </Text>
    </Container>
  );
}