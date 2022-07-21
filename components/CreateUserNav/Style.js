import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 3rem auto;

  div.container {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    justify-items: center;
    align-items: center;
    width: 60%;
    margin: auto;
    color: #1f4173;
  }

  .item {
    border: 3px solid #1f4173;
    padding: 2rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .active {
    background: #003ad2;
    border: 3px solid #003ad2;
    color: #fff;
  }

  p.text {
    text-align: center;
    color: #1f4173;
    font-size: 16px;
  }

  p.text_active {
    color: #003ad2;
  }
`;
