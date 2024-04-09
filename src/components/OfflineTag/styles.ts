import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const dimensions = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_500};
  width: ${dimensions.width}px;
  position: absolute;
  z-index: 1;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_100};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
margin-left: 4px;
`;