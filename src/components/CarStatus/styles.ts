import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
width: 100%;
margin: 32px 0;
padding: 22px;
border-radius: 6px;
flex-direction: row;
align-items: center;
`;

export const Icon = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_600};
width: 77px;
height: 77px;
border-radius: 6px;
margin-right: 12px;
justify-content: center;
align-items: center;
`


export const Text = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_100};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
flex: 1;
textAlignVertical: center;
`

export const TextRegister = styled.Text`
color: ${({ theme }: any) => theme.COLORS.BRAND_LIGHT};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`