import styled from "styled-components";

export const Container = styled.ul`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  animation-name: opacity-animation;
  animation-duration: 1.5s;

  @keyframes opacity-animation {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 100;
      transform: scale(1);
    }
  }

  > p {
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;
