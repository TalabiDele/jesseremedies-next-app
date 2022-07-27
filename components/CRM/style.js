import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;

  div.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 2rem auto 0rem auto;
  }

  div.container {
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    width: 90%;
    margin: 3rem auto;
    padding-bottom: 10rem;
    font-size: 14px;
    padding-top: 2rem;

    ul,
    div.wrapper {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-items: center;
      width: 100%;
      margin: auto;
      border-bottom: 1px solid #e6eaf0;
      padding-bottom: 1rem;
    }

    div.wrapper {
      p {
        padding: 0rem 1rem 0rem 1rem;
        text-align: center;
      }
    }

    ul {
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
`;
