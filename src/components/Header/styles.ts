import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
width: 100%;
padding: 0 32px 24px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Title = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_100};
font-size: ${({ theme }: any) => theme.FONT_SIZE.XL}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;