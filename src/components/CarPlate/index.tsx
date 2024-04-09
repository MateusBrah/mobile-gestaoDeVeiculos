import { Container, Title, Input } from './styles';
import { CarPlatePropsT } from '../../@types/componentsProps';
import { useTheme } from 'styled-components/native';
import { Controller } from 'react-hook-form';

export function CarPlate({ title, control, name, ...rest }: Readonly<CarPlatePropsT>) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, ...ref }) => {
          return (
            <Input
              {...ref}
              {...rest}
              maxLength={7}
              autoCapitalize='characters'
              placeholderTextColor={COLORS.GRAY_400}
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
}