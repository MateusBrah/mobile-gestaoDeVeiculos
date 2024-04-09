import { useTheme } from 'styled-components/native';
import { DescriptionPropsT } from '../../@types/componentsProps';
import { Container, Title, Input } from './styles';
import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const Description = forwardRef<TextInput, DescriptionPropsT>(({ title, control, name, ...rest }, ref) => {
  const { COLORS } = useTheme()
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, ...ref }) => {
          return (
            <Input
              ref={ref}
              {...rest}
              placeholderTextColor={COLORS.GRAY_400}
              multiline
              autoCapitalize="sentences"
              value={field.value}
              onChangeText={(text: string) => {
                field.onChange(text);
              }}
            />
          )
        }}
      />
    </Container>
  );
});

export { Description };