import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
width: 100%;
padding: 16px;
border-radius: 6px;
`;

export const Title = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_300};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const Input = styled.TextInput`
color: ${({ theme }: any) => theme.COLORS.GRAY_200};
font-size: ${({ theme }: any) => theme.FONT_SIZE.XXL}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
text-align: center;
margin-top: 16px;
`;
