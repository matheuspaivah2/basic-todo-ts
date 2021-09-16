import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 25rem;
  flex-direction: column;

  width: 80%;
  height: 16rem;
  background-color: white;
  border: none;
  background: var(--background);
  border-radius: 3px;

  position: absolute;
  margin: 25vh auto;
  left: 0;
  right: 0;

  header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: black;
    border-bottom: 1px solid black;
    h1 {
      font-size: 1.2rem;
      color: white;
    }

    button {
      border: none;
      background: none;

      svg {
        width: 2rem;
        height: 2rem;
        color: white;

        transition: color 0.2s;
        &:hover {
          color: var(--blue-light);
        }
      }
    }
  }
  p {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    gap: 1rem;
    width: 100%;

    button {
      border: none;
      border-radius: 4px;
      width: 40%;

      padding: 0.5rem 0rem;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      background-color: #3f628b;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
      color: white;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
