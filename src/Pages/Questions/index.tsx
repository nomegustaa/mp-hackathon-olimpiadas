import Box from '../../components/Box';
import { useEffect, useState } from 'react';
import { CaretRight } from '@phosphor-icons/react';
import * as S from './styles';
import { api } from '../../config';
import { GetOlympicGamesCountriesProps, RequestProps } from './types';
import { getQuestions } from '../../utils/getQuestions';
import { shuffleArray } from '../../utils/shuffleArray';
import TimeRemaining from '../../components/Time';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const Questions = () => {
  const navigate = useNavigate();

  const [timeRemaining, setTimeRemaining] = useState(15);
  const [question, setQuestion] = useState(1);
  const [shuffledArray, setShuffledArray] = useState<
    GetOlympicGamesCountriesProps[]
  >([]);
  const [countrie, setCountrie] = useState<GetOlympicGamesCountriesProps>();
  const [countries, setCountries] = useState<GetOlympicGamesCountriesProps[]>(
    [],
  );
  const [selected, setSelected] = useState('');
  const [request, setRequest] = useState<RequestProps>(null);

  const getCountries = async () => {
    setRequest('loading');
    try {
      setRequest('success');
      const page = Math.floor(Math.random() * 4) + 1;

      const response = await api.get('countries', {
        params: { page: page },
      });

      const data = response.data.data;

      const newQuestions: GetOlympicGamesCountriesProps[] = [];

      getQuestions(data, newQuestions);

      const countrie = Math.floor(Math.random() * newQuestions.length);

      setCountries(newQuestions);
      setCountrie(newQuestions[countrie]);
    } catch (e) {
      setRequest('error');
      console.log(e);
    }
  };

  const nextQuestion = async () => {
    const uuid = crypto.randomUUID();
    const responseCorrect = selected === countrie?.id;

    localStorage.setItem(`-${uuid}`, responseCorrect ? '1' : '0');
    setSelected('');

    await getCountries();

    if (question === 10) {
      navigate('/result');
    } else {
      setQuestion((question) => question + 1);
    }
  };

  const classNameTime =
    timeRemaining <= 10 && timeRemaining > 5
      ? 'warning'
      : timeRemaining <= 5
      ? 'danger'
      : '';

  useEffect(() => {
    if (countries) {
      const shuffledArray = countries && shuffleArray(countries);
      setTimeRemaining(15);
      setShuffledArray(shuffledArray);
    }
  }, [countries]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      nextQuestion();
    }
  }, [timeRemaining]);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <Box>
        <>
          <S.ContainerQuiz>
            <S.Title>Quiz Olimpíco</S.Title>
            <S.CorrectResponseCount className={classNameTime}>
              <TimeRemaining
                timeRemainingColor={classNameTime}
                setTimeRemaining={setTimeRemaining}
                timeRemaining={timeRemaining}
              />
            </S.CorrectResponseCount>
          </S.ContainerQuiz>

          <S.ContainerQuestion>
            <S.Question>De qual país essa é essa bandeira ?</S.Question>
          </S.ContainerQuestion>

          {request === 'loading' && (
            <S.ContainerImage>
              <Loading />
            </S.ContainerImage>
          )}
          {request === 'success' && countrie && (
            <S.ContainerImage>
              <img src={countrie.flag_url} alt={countrie.id} />
            </S.ContainerImage>
          )}

          {request === 'error' && (
            <S.ContainerImage>
              <h1>Ocorreu um erro inesperado</h1>
              <p>Já estamos resovendo</p>
            </S.ContainerImage>
          )}

          <S.ContainerQuiz>
            {shuffledArray.map((item) => {
              return (
                <S.ContainerAlternatives
                  className={selected.includes(item.id) ? 'active' : ''}
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                >
                  <p>{item.name}</p>
                </S.ContainerAlternatives>
              );
            })}
          </S.ContainerQuiz>

          <S.ContainerQuizMobile>
            <S.AlternativesAmount>
              <span>{question}</span>/10
            </S.AlternativesAmount>

            {selected && (
              <>
                <S.NextQuestion onClick={nextQuestion}>
                  <CaretRight size={26} color="#fff" weight="bold" />
                </S.NextQuestion>
              </>
            )}
          </S.ContainerQuizMobile>
        </>
      </Box>
    </>
  );
};

export default Questions;
