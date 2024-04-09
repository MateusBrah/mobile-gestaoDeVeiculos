import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHeader = () => {
  const safeArea = useSafeAreaInsets();
  const paddingTop = safeArea.top + 42;

  const { goBack } = useNavigation();

  return { paddingTop, goBack };
};