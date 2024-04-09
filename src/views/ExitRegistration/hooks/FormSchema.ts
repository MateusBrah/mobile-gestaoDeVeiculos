import { z } from "zod";

function validarPlaca(plateValue: string) {
  const toUpper = plateValue.toUpperCase();
  const regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
  const isValid = toUpper.match(regex);
  return isValid;
}

export const exitRegisterSchema = z.object({
  plate: z.string().refine(validarPlaca, {
    message: "Para continuar digite uma placa válida. Deve ser no formato AAA1234 ou AAA12A8.",
  }),
  description: z.string().min(1, { message: 'A finalidade deve ser preenchida.' }),
});

export type ExitRegisterSchema = z.infer<typeof exitRegisterSchema>;

export const defaultValues = () => {
  return {
    plate: '',
    description: '',
  }
};