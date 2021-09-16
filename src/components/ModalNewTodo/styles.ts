import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 25rem;
  flex-direction: column;

  width: 80%;
  height: 24rem;
  background-color: white;
  border: none;
  background: var(--background);
  border-radius: 3px;

  position: absolute;
  margin: 10vh auto;
  left: 0;
  right: 0;

  header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: black;
    border-bottom: 1px solid black;
    h1 {
      font-size: 1.5rem;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input {
      width: 75%;
      height: 2rem;
      border: 1px solid black;
      padding: 0.5rem;
      border-radius: 3px;
    }

    textarea {
      width: 75%;
      height: 10rem;
      border: 1px solid black;
      padding: 0.5rem;
      border-radius: 3px;
    }

    button {
      border: none;
      border-radius: 4px;
      width: 75%;

      padding: 0.5rem 0rem;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      background-color: #3f628b;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
      color: white;
      font-weight: 500;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
