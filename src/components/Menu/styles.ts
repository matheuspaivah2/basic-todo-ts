import styled from "styled-components";

export const Container = styled.nav`
  max-width: 75%;
  margin: 0 auto;

  display: flex;

  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  gap: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .add-task {
    display: flex;
    align-items: center;

    border: none;
    max-width: 40%;

    svg {
      width: 2rem;
      height: 3rem;
      color: var(--black-light);

      transition: color 0.2s;
      &:hover {
        color: var(--blue-light);
      }
    }
  }
`;
