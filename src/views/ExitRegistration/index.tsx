import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container, Content, Permission } from './styles';
import { Header } from '../../components/Header';
import { CarPlate } from '../../components/CarPlate';
import { Description } from '../../components/Description';
import { SubmitButton } from '../../components/SubmitButton';
import { useExitRegistration } from './hooks/useExitRegistration';
import { LoadingComponent } from '../../components/loading/index';
import { LocationInfo } from '../../components/LocationInfo';
import { Map } from '../../components/Maps'

const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';

export function ExitRegistration() {
  const { descriptionRef, control, isLoading, locationPermission, isLoadingLocation, userAddres, currentCoords, handleSubmit, submitForm, onError } = useExitRegistration();
  if (!locationPermission?.granted) {
    return (
      <Container>
        <Header title='Saída' />
        <Permission>
          É necessário permitir o acesso à localização para registrar a saída.
        </Permission>
      </Container>
    )
  }
  if (isLoadingLocation) {
    return (
      <LoadingComponent />
    )
  }
  return (
    <Container>
      <Header title='Saída' />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior}>
        <ScrollView>
          {currentCoords && <Map coordinates={[currentCoords]} />}
          <Content>
            {userAddres &&
              <LocationInfo title='Localização atual' description={userAddres} />
            }
            <CarPlate
              control={control}
              name='plate'
              title='Placa do veículo'
              placeholder="BR423SA"
              onSubmitEditing={() => descriptionRef?.current?.focus()}
              returnKeyType='next'
            />
            <Description
              control={control}
              name='description'
              title='Finalidade'
              placeholder="Vou utilizar o veículo para..."
              ref={descriptionRef}
              returnKeyType='send'
              blurOnSubmit
            />
            <SubmitButton
              title={'Registrar Saída'}
              onPress={handleSubmit(submitForm, onError)}
              isLoading={isLoading}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}