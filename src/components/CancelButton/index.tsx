import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';

export function CancelButton({ ...rest }) {
  return (
    <Container {...rest}>
      <Image
        source={require("../../assets/icons/IconClose.png")}
        width={32}
        height={32}
      />
    </Container>
  );
}