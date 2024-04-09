import styled from 'styled-components/native';
import { Image } from 'expo-image'

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
width: 100%;
padding: 32px;
flex-direction: row;
align-items: center;
`;

export const Welcome = styled.View`
flex: 1;
margin-left: 14px;
`;

export const Message = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_100};
font-size:  ${({ theme }: any) => theme.FONT_SIZE.MD}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const Name = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_100};
font-size:  ${({ theme }: any) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const ProfileImage = styled(Image)`
width: 54px;
height: 54px;
border-radius: 7px;
`;