import { LocationInfoPropsT } from "../../@types/componentsProps";
import { Container, Info, Title, Text, CardLocation } from "./styles";
import { Image } from 'react-native';

export function LocationInfo({ title, description }: LocationInfoPropsT) {
  return (
    <Container>
      <CardLocation>
        <Image
          source={require("../../assets/icons/IconCar.png")}
          width={16}
          height={16}
        />
      </CardLocation>
      <Info>
        <Title>
          {title}
        </Title>
        <Text>
          {description}
        </Text>
      </Info>
    </Container>
  );
}