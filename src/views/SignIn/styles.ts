import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_800};
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  text-align: center;

  margin-bottom: 32px;
`; 