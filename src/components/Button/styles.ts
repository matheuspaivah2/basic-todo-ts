import styled from "styled-components";

export const Container = styled.button`
  width: 6rem;

  border: none;
  font-size: 1rem;
  font-weight: 700;
  color: var(--black-light);
  border-radius: 3px;

  display: flex;
  align-items: flex-start;

  transition: color 0.2s;
  &:hover {
    color: var(--blue-light);
  }
`;
