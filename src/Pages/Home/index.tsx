import TextInput from '../../components/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';
import Icons from '../../components/icons';
import * as S from './styles';

const Home = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');

  const [userName, setUserName] = useState<string | null>('' || name);

  const checkName = () => {
    if (userName) {
      if (userName.trim() !== '') {
        localStorage.setItem('name', userName);
        navigate('/question');
      }
    }
  };

  console.log(userName, name);

  return (
    <S.Container>
      <Icons />
      <S.Title>
        Bem-vindo ao
        <span>Quiz Olímpico</span>
        de 2024
      </S.Title>
      <S.QuizGoal>
        Será que você consegue ganhar uma medalha de ouro?
      </S.QuizGoal>

      <S.ContainerQuizParagraph>
        <S.QuizParagraph>
          Veja se você consegue identificar corretamente as bandeiras de cada
          país com base nas imagens. Boa sorte e divirta-se descobrindo quais
          nações estão representadas!
        </S.QuizParagraph>
      </S.ContainerQuizParagraph>
      <S.ContainerForm>
        <TextInput
          onChange={(e) => setUserName(e.currentTarget.value)}
          value={userName || ''}
        />
        <S.ContainerButton>
          <S.Start
            onClick={checkName}
            disabled={userName ? userName.trim() === '' : true}
          >
            <Play
              size={100}
              weight="fill"
              style={{ padding: '0.375rem' }}
              color="#fff"
            />
          </S.Start>
        </S.ContainerButton>
      </S.ContainerForm>
    </S.Container>
  );
};

export default Home;
