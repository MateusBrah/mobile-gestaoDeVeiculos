import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
  width: 100%;
  padding: 20px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.WHITE};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const Text = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  margin-top: 4px;
`;




// color: ${({ theme }: any) => theme.COLORS.GRAY_100};
// font-size: ${({ theme }: any) => theme.FONT_SIZE.XL}px;
// font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};