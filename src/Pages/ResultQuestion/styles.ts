import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.938rem 0;

  h1 {
    margin: 1rem 0;
    color: ${(props) => props.theme.white};
  }

  p {
    margin: 1rem 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
