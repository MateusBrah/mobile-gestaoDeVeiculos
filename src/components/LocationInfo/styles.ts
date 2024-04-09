import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const Text = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const CardLocation = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  margin-right: 12px;
  padding: 14px;
`;