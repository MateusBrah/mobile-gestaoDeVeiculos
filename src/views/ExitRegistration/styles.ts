import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_800};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  gap: 16px;
  padding: 32px;
  margin-top: 16px;
`;

export const Permission = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.WHITE};
  font-family:  ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  margin: 32px;
`