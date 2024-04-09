import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Line = styled.View`
  height: 64px;
  width: 1px;
  margin: -2px;
  margin-left: 23px;
  border-width: 1px;
  border-left-color: ${({ theme }: any) => theme.COLORS.GRAY_400};
`;

export const Content = styled.View`
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