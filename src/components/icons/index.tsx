import {
  Baseball,
  Basketball,
  SoccerBall,
  TennisBall,
} from '@phosphor-icons/react';
import * as S from './styles';

const Icons = () => {
  return (
    <div>
      <S.AnimatedIcon>
        <SoccerBall size={32} />
      </S.AnimatedIcon>
      <S.AnimatedIcon>
        <Basketball size={32} />
      </S.AnimatedIcon>
      <S.AnimatedIcon>
        <TennisBall size={32} />
      </S.AnimatedIcon>
      <S.AnimatedIcon>
        <Baseball size={32} />
      </S.AnimatedIcon>
    </div>
  );
};

export default Icons;
