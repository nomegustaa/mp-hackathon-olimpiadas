import styled from 'styled-components';

export const ContainerQuiz = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) {
    margin: 1rem 0 0 0;
    flex-direction: column;
  }
`;

export const ContainerQuizMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 8.125rem;
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;

    height: 5rem;
    p,
    div {
      margin: 0;
    }
  }
`;

export const CorrectResponseCount = styled(ContainerQuiz)`
  gap: 0.375rem;
  border: 1px solid ${(props) => props.theme['green-light']};
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  background-color: ${(props) => props.theme['grey-4']};

  &.warning {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &.danger {
    border: 1px solid ${(props) => props.theme['red-dark']};
  }

  p {
    color: ${(props) => props.theme['green-light']};
    font-weight: bold;

    &.warning {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &.danger {
      color: ${(props) => props.theme['red-dark']};
    }
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.white};
`;

export const ContainerQuestion = styled(ContainerQuiz)`
  justify-content: center;
  margin: 0 0 4rem 0;
`;

export const ContainerImage = styled.div`
  margin: 1rem 0 2rem 0;
  text-align: center;
`;

export const Question = styled.h1`
  color: ${(props) => props.theme['grey-1']};
`;

export const ContainerAlternatives = styled(ContainerQuiz)`
  cursor: pointer;
  flex-direction: column;
  row-gap: 1rem;
  border: 4px solid ${(props) => props.theme['grey-3']};
  background-color: ${(props) => props.theme['grey-4']};
  padding: 0.813rem;
  border-radius: 8px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  &.active {
    border: 4px solid ${(props) => props.theme['yellow-dark']};
  }
`;

export const AlternativesAmount = styled.p`
  color: ${(props) => props.theme['grey-1']};
  font-size: 0.875rem;
  margin: 4rem 0 1rem 0;
  span {
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const NextQuestion = styled(ContainerQuiz)`
  margin: 4rem 0 1rem 0;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 99999px;
  background-color: ${(props) => props.theme['yellow-dark']};
`;
