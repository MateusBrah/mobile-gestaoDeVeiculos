import { ButtonPropsT } from '../../@types/componentsProps';
import { Container, Loading, Title } from './styles';

export function SubmitButton({ title, isLoading, onPress }: Readonly<ButtonPropsT>) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={onPress}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  );
}