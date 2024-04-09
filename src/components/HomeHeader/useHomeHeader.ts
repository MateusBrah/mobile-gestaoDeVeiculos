import { useUser, useApp } from '@realm/react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeHeader = () => {
  const user = useUser();
  const app = useApp();
  const safeArea = useSafeAreaInsets();

  const paddingTop = safeArea.top + 32;

  const handleLogout = () => {
    app.currentUser?.logOut();
  }

  return { user, paddingTop, handleLogout };
};