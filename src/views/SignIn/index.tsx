import { Container, Title, SubTitle } from './styles';
import backgroundImg from '../../assets/background.png';
import { SubmitButton } from '../../components/SubmitButton';
import { useSignIn } from './hooks/useSignIn';

export function SignIn() {
  const { isAuthenticate, handleGoogleSignIn } = useSignIn();

  return (
    <Container source={backgroundImg}>
      <Title>
        Dysrup Veículos
      </Title>
      <SubTitle>
        Gestão de uso de veículos
      </SubTitle>
      <SubmitButton title='Entrar com Google' isLoading={isAuthenticate} onPress={handleGoogleSignIn} />
    </Container>
  );
}
