import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import Toast  from 'react-native-toast-message';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
      <Toast/>
    </NavigationContainer>
  );
}