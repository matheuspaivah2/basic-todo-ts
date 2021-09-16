import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  header {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;
    img {
      width: 12rem;
    }
  }

  .empty-tasks {
    margin: 0 auto;
    margin-top: 3rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: 1rem;
  }
`;
