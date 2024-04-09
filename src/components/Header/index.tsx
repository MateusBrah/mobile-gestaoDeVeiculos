import { Container, Title } from './styles';
import { TouchableOpacity, Image } from 'react-native';
import { useHeader } from './useHeader';
import { HeaderPropsT } from '../../@types/componentsProps';

export function Header({ title }: Readonly<HeaderPropsT>) {
  const { paddingTop, goBack } = useHeader();
  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity onPress={goBack}>
        <Image source={require('../../assets/icons/IconArrow.png')} width={24} height={24} />
      </TouchableOpacity>
      <Title>
        {title}
      </Title>
    </Container>
  );
}