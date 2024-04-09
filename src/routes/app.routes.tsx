
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../views/Home';
import { ExitRegistration } from '../views/ExitRegistration';
import { ArrivalRegistration } from '../views/ArrivalRegistration';
const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="registration" component={ExitRegistration} />
      <Screen name="arrival" component={ArrivalRegistration} />
    </Navigator>
  );
}