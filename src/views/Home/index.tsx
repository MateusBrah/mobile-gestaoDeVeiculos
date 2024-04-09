import { CarStatus } from '../../components/CarStatus';
import { Header } from '../../components/HomeHeader';
import { Container, Content, Text, Title } from './styles';
import { useHome } from './hooks/useHome';
import { HistoricCard } from '../../components/HistoricCard';
import { FlatList } from 'react-native';

export function Home() {
  const { carInUse, historicCar, handleRegister, handleDetails } = useHome();
  return (
    <Container>
      <Header />
      <Content>
        <CarStatus
          onPress={handleRegister}
          plate={carInUse?.plate.toUpperCase()}
        />
        <Title>
          Histórico
        </Title>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          data={historicCar}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <HistoricCard
              historic={item}
              onPress={() => handleDetails(item.id)}
            />
          )}
          ListEmptyComponent={(
            <Text>
              Nenhum registro encontrado.
            </Text>
          )}
        />
      </Content>
    </Container >
  );
}