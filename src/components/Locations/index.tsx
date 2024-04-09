import { LocationInfoPropsT } from "../../@types/componentsProps";
import { CardLocation, Container, Content, Info, Title, Text, Line } from "./styles";
import { Image } from 'react-native';


type Props = {
  arrival?: LocationInfoPropsT;
  departura: LocationInfoPropsT;
}

export function Locations({ arrival, departura }: Props) {
  return (
    <Container>
      <Content>
        <CardLocation>
          <Image
            source={require("../../assets/icons/IconCar.png")}
            style={{ width: 24, height: 24 }}
          />
        </CardLocation>
        <Info>
          <Title>
            {departura.title}
          </Title>
          <Text>
            {departura.description}
          </Text>
        </Info>
      </Content>
      {arrival &&
        <>
          <Line />
          <Content>
            <CardLocation>
              <Image
                source={require("../../assets/icons/IconFlag.png")}
                style={{ width: 24, height: 24 }}
              />
            </CardLocation>
            <Info>
              <Title>
                {arrival.title}
              </Title>
              <Text>
                {arrival.description}
              </Text>
            </Info>
          </Content>
        </>
      }
    </Container>
  );
}