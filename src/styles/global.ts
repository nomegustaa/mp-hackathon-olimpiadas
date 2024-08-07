import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  :focus {
    outline: 0;
  }

  h1, p {
    color: ${(props) => props.theme.white};
    text-align: center;
  }

  body{
    background: ${(props) => props.theme['purple-700']};
  }

  @media screen and (max-width: 1100px) {
    body {
      padding: 2.938rem 0.938rem;
    }
  }


  

  body,input, textarea, button {
    font-family: 'Sora', serif;
  }
 }
`;
