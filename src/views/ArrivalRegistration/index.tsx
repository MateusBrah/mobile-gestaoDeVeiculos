
import { Container, Content, Text, Description, Footer, Plate, Title, SyncInfo } from './styles';
import { useArrivalRegistration } from './hooks/useArrivalRegistration';
import { Header } from '../../components/Header';
import { SubmitButton } from '../../components/SubmitButton';
import { CancelButton } from '../../components/CancelButton';
import { Map } from '../../components/Maps';
import { Locations } from '../../components/Locations';
import { LoadingComponent } from '../../components/loading';
import { ScrollView } from 'react-native';

export function ArrivalRegistration() {
  const { isLoading, historic, sync, coordinates, departure, arrival, handleCancel, handleRegisterArrival } = useArrivalRegistration();
  if (isLoading) {
    <LoadingComponent />
  }
  return (
    <Container>
      <Header title={historic?.status === 'departure' ? 'Saída' : 'Chegada'} />
      <ScrollView>
        {coordinates.length > 0 &&
          <Map coordinates={coordinates} />
        }
        <Content>
          <Locations
            departura={departure}
            arrival={arrival || undefined}
          />
          <Title>
            Placa do Veículo
          </Title>
          <Plate>
            {historic?.plate.toUpperCase()}
          </Plate>
          <Title>
            Finalidade
          </Title>
          <Description>
            {historic?.description}
          </Description>
        </Content>
        {sync ? (
          <SyncInfo>
            <Text>Dados Sincronizados</Text>
          </SyncInfo>
        ) : (
          <SyncInfo>
            <Text>Sincronização Pendente</Text>
          </SyncInfo>
        )}
        {historic?.status === 'departure' &&
          <Footer>
            <CancelButton
              onPress={handleCancel}
            />
            <SubmitButton
              title='Registrar Chegada'
              onPress={handleRegisterArrival} />
          </Footer>
        }
      </ScrollView>
    </Container>
  );
}