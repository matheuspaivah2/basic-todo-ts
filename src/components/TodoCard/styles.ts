import styled from "styled-components";

export const Container = styled.li`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 0.3rem;
  border: 1px solid black;
  margin-bottom: 1.5rem;
  padding: 0.5rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-top: 5px;
  }
  p + p {
    margin-top: 0.5rem;
  }

  button {
    border: none;
    border-radius: 4px;
    width: 100%;

    padding: 0.5rem 0rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: var(--black-light);
    margin-bottom: 0.5rem;
    margin-top: 0.8rem;
    color: white;
    position: relative;
    svg {
      position: absolute;
      left: 3%;
      width: 2rem;
      height: 3rem;
      color: var(--blue-light);
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
