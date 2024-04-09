import { CarStatusPropsT } from "../../@types/componentsProps";

export const useCarStatus = ({ plate }: CarStatusPropsT) => {
  const message = plate ? `Veículo ${plate} em uso. ` : 'Nenhum veículo em uso. ';
  const status = plate ? `Clique aqui para registrar a chegada.` : 'Clique aqui para registrar a saída.';

  return { message, status };
};