import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  min-width: 13.438rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0 1rem;
  height: 2.375rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-700']};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    min-width: auto;
  }
`;
