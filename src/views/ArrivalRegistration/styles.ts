import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_800};
`;

export const Content = styled.View`
  flex-grow: 1;
  padding: 32px;
`;

export const Text = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  margin-top: 32px;
  margin-bottom: 5px;
`;

export const Plate = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
  text-align: justify;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
  padding: 32px;
`;
export const SyncInfo = styled.View`
  width: 100%;
  margin: 32px 0px 32px;
  `;

