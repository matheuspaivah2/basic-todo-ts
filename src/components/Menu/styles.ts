import styled from "styled-components";

interface ContainerProps {
  selectedPage: string;
}

export const Container = styled.nav<ContainerProps>`
  max-width: 75%;
  margin: 0 auto;

  display: flex;

  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  gap: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    max-width: 80%;
  }

  .content {
    display: flex;
    gap: 1rem;

    button {
      background: ${({ selectedPage }) =>
        selectedPage === "pending" ? "#dde9ff" : "none"};
      border: none;
      font-weight: 500;
      border-radius: 3px;
      font-size: 1rem;
    }
    .bt-finished {
      background: ${({ selectedPage }) =>
        selectedPage === "finished" ? "#dde9ff" : "none"};
    }
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
