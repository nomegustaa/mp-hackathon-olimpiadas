import { ComponentProps } from 'react';
import * as S from './styles';

interface BoxProps extends ComponentProps<'div'> {}

const Box = ({ children }: BoxProps) => {
  return <S.Box>{children}</S.Box>;
};

export default Box;
