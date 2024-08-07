import styled, { keyframes } from 'styled-components';

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const AnimatedIcon = styled.div`
  display: inline-block;
  font-size: 2rem;
  margin: 0 1rem;
  color: ${(props) => props.theme['yellow-dark']};
  animation: ${jumpAnimation} 1s infinite;
`;
