import styled from 'styled-components';

export const Box = styled.div`
  background: ${(props) => props.theme['grey-6']};
  border-radius: 8px;
  padding: 0.625rem 1.875rem;
  width: 50%;

  @media screen and (max-width: 1100px) {
    padding: 0 1.875rem;
    width: 80%;
  }
`;
