import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  @media screen and (max-width: 1100px) {
    height: auto;
  }
`;