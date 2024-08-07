import { GetOlympicGamesCountriesProps } from '../Pages/Questions/types';

export const getQuestions = (
  data: GetOlympicGamesCountriesProps[],
  arrayQuestions: GetOlympicGamesCountriesProps[],
) => {
  for (let i = 0; i < 4; i++) {
    const outhersNumbers = Math.floor(Math.random() * data.length);
    if (!arrayQuestions.includes(data[outhersNumbers])) {
      arrayQuestions.push(data[outhersNumbers]);
    } else {
      i--;
    }
  }
};
