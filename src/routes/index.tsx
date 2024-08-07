import { BrowserRouter, Route, Routes as RouteDom } from 'react-router-dom';
import Home from '../Pages/Home';
import ResultQuestion from '../Pages/ResultQuestion';
import Questions from '../Pages/Questions';
import * as S from './styles';

const Routes = () => {
  return (
    <S.Container>
      <BrowserRouter basename="/quiz-olimpico">
        <RouteDom>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/result" element={<ResultQuestion />} />
        </RouteDom>
      </BrowserRouter>
    </S.Container>
  );
};

export default Routes;
