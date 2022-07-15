import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  margin-left: 13rem;

  .image {
    border-radius: 20px;
  }

  .btn {
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    font-weight: 400;
  }

  .loaned {
    background: rgba(0, 58, 210, 0.1);
    color: rgba(0, 58, 210, 1);
  }

  .processing {
    color: rgba(36, 189, 199, 1);
    background: rgba(36, 189, 199, 0.1);
  }

  .paid {
    color: rgba(22, 195, 91, 1);
    background: rgba(22, 195, 91, 0.1);
  }

  .due_soon {
    color: rgba(255, 153, 0, 1);
    background: rgba(255, 153, 0, 0.1);
  }

  .overdue {
    color: #e80000;
    background: #e800002f;
  }

  div.container {
    margin-top: 3rem;
    padding-bottom: 10rem;
    font-size: 14px;
    padding: 2rem;
  }

  div.personal {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 16px;
      margin-bottom: 0.5rem;
    }
  }

  div.flex {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  div.loan_container,
  div.finance {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  div.financial_wrapper {
    h3 {
      margin-bottom: 1rem;
      margin-left: 1rem;
      color: #e80000;
      background: #e8000022;
      padding: 0.5rem;
      border-radius: 5px;
      width: 40%;
      text-align: center;
    }
  }

  div.loan_wrapper {
    margin-right: 5rem;

    h3 {
      margin-bottom: 1rem;
      margin-left: 1rem;
      color: #e80000;
      background: #e8000022;
      padding: 0.5rem;
      border-radius: 5px;
      width: 20%;
      text-align: center;
    }
  }

  div.loan_container,
  div.financial {
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    width: 100%;
    gap: 1rem;
    padding: 1rem 2rem;

    span {
      font-weight: 700;
    }

    p {
      margin-bottom: 1rem;
      font-size: 16px;
    }
  }
`;

export const Wrapper = styled.div``;
