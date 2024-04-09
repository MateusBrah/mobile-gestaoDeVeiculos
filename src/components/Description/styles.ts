import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
width: 100%;
height: 150px;
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
font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
vertical-align: top;
margin-top: 18px;
`;