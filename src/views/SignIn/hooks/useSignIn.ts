import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { ANDROID_CLIENT_ID } from '@env';
import { Alert } from 'react-native';
import { Realm, useApp } from '@realm/react';

WebBrowser.maybeCompleteAuthSession();

export const useSignIn = () => {
  const app = useApp();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ['profile', 'email'],
  });

  function handleGoogleSignIn() {
    setIsAuthenticate(true);
    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticate(false);
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credential = Realm.Credentials.jwt(response.authentication.idToken);
        app.logIn(credential).catch((error) => {
          Alert.alert('Desculpe!', "Não foi possível autenticar com o Google. Tente novamente.")
          setIsAuthenticate(false);
        });
      } else {
        Alert.alert('Desculpe!', "Não foi possível autenticar com o Google. Tente novamente.")
        setIsAuthenticate(false);
      }
    }
  }, [response])

  return { isAuthenticate, handleGoogleSignIn };
}