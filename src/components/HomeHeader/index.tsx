import { Container, Message, Name, Welcome, ProfileImage } from './styles';
import { TouchableOpacity, Image } from 'react-native';
import { useHomeHeader } from './useHomeHeader';

export function Header() {
  const { user, paddingTop, handleLogout } = useHomeHeader();
  return (
    <Container style={{ paddingTop }}>
      <ProfileImage
        source={{ uri: user?.profile?.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />
      <Welcome>
        <Message
        >
          Olá,
        </Message>
        <Name
        >
          {user?.profile?.name}
        </Name>
      </Welcome>
      <TouchableOpacity
        onPress={handleLogout}
      >
        <Image
          source={require("../../assets/icons/IconPower.png")}
          width={32}
          height={32}
        />
      </TouchableOpacity>
    </Container>
  );
}