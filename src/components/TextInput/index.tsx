import * as S from './styles';
import { TextInputProps } from './types';

const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <S.TextInput
      type="text"
      id="name"
      placeholder="Digite seu nome"
      {...props}
    />
  );
};

export default TextInput;
