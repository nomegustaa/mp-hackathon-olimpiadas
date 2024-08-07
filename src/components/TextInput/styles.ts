import styled from 'styled-components';

export const TextInput = styled.input`
  all: unset;
  padding: 0.625rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.white};

  ::placeholder {
    color: ${(props) => props.theme.white};
  }
`;
