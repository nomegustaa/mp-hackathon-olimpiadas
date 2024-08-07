import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  text-align: center;
  margin: 0;
  padding: 1.25rem;
  line-height: 1.2;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    margin: 0 0.5rem;
    font-weight: bold;
  }
`;

export const ContainerQuizParagraph = styled.div`
  display: flex;
  justify-content: center;
`;

export const QuizParagraph = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  margin: 1rem 0;
  width: 67%;
  text-align: left;
  margin: 1rem 0;
`;

export const QuizGoal = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  color: ${(props) => props.theme['yellow-dark']};
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  position: relative;
  flex-wrap: wrap;
`;

export const ContainerButton = styled.div`
  position: absolute;
  top: 60px;
`;

export const Start = styled.button`
  all: unset;
  svg {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 99999px;
  }
  transition: 5ms;

  :hover {
    transition: 5ms;
    box-shadow: 0 0 10px ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    svg {
      cursor: no-drop;
      background-color: ${(props) => props.theme['yellow-light']};
      animation: none;

      &:hover {
        box-shadow: none;
      }
    }
  }
`;
