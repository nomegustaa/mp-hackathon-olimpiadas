import { useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { getResultResponse } from '../../utils/getResultResponse';
import * as S from './styles';
import { Medal } from '@phosphor-icons/react';
import Icons from '../../components/icons';

const MedalDisplay = ({ length }: { length: number }) => {
  if (length >= 7) return <Medal size={100} color="#ffd700" />;
  if (length >= 5) return <Medal size={100} color="#7a8386" />;
  if (length < 5) return <Medal size={100} color="#cd7f32" />;
  return null;
};

const ResultQuestion = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const userName = name;

  const restartQuiz = (path: string) => {
    localStorage.clear();
    localStorage.setItem('name', userName || '');
    navigate(path);
  };

  return (
    <>
      <Box>
        <S.Container>
          <Icons />
          <h1>Quiz Concluído!</h1>

          <h1>Você é Medalha de</h1>
          <MedalDisplay length={getResultResponse().length} />

          <p>Parabéns {name || 'Estranho'}</p>
          <p>Você acertou {getResultResponse().length} de 10</p>

          <S.ContainerButton>
            <Button
              value="Jogar novamente"
              onClick={() => restartQuiz('/question')}
            />
            <Button value="Voltar para home" onClick={() => restartQuiz('/')} />
          </S.ContainerButton>
        </S.Container>
      </Box>
    </>
  );
};

export default ResultQuestion;
