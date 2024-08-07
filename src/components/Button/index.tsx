import * as S from './styles';
import { ButtonProps } from './types';

const Button = ({ value, ...props }: ButtonProps) => {
  return <S.Button {...props}>{value}</S.Button>;
};

export default Button;
