import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_600};
height: 56px;
width: 56px;
border-radius: 6px;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.WHITE};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.WHITE,
}))``;