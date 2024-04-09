import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { LoadingComponent } from './src/components/loading/index';
import { SignIn } from './src/views/SignIn';
import { AppProvider, UserProvider } from '@realm/react';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RealmProvider, syncConfig } from './src/realm';
import 'react-native-get-random-values'
import './src/hooks/dayjs/index'
import Realm from "realm";
import { OfflineTag } from './src/components/OfflineTag';
import { useNetInfo } from "@react-native-community/netinfo";
Realm.flags.THROW_ON_GLOBAL_REALM = true;

export default function App() {
  const [fontIsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const netInfo = useNetInfo();

  if (!fontIsLoaded) {
    return <LoadingComponent />;
  }

  return (
    <AppProvider id="application-0-dpspf">
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{ backgroundColor: theme.COLORS.GRAY_800 }}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          {!netInfo.isConnected && <OfflineTag />}
          <UserProvider fallback={<SignIn />}>
            <RealmProvider sync={syncConfig} fallback={<LoadingComponent />}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

