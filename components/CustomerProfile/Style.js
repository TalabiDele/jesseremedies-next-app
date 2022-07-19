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

  .start {
    color: #2e7cf6;
    background: #2e7bf629;
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

  div.btns {
    button {
      padding: 0.5rem;
      background: none;
      border-radius: 5px;
      margin-right: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .approve {
      border: 1px solid rgba(22, 195, 91, 1);
      color: rgba(22, 195, 91, 1);

      &:hover {
        color: #fff;
        background: rgba(22, 195, 91, 1);
      }
    }

    .decline {
      border: 1px solid #e80000;
      color: #e80000;

      &:hover {
        color: #fff;
        background: #e80000;
      }
    }

    .start {
      border: 1px solid #2e7cf6;
      color: #2e7cf6;

      &:hover {
        color: #fff;
        background: #2e7cf6;
      }
    }
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

  div.documents {
    margin-top: 2rem;

    h3 {
      margin-bottom: 1rem;
    }

    img {
      border-radius: 10px;
      border: 2px solid #2e7cf6;
    }

    div.docs {
      display: flex;
      gap: 1rem;
    }

    .image {
      border: 2px solid #000;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border: 2px solid #2e7cf6;
      }
    }

    div.modal {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #042b6997;
      z-index: 1;
      display: grid;
      justify-content: center;
      align-items: center;
      margin: auto;
      transition: all 0.3s ease-in-out;

      svg {
        position: absolute;
        right: 43rem;
        top: 7rem;
        z-index: 3;
        cursor: pointer;
      }
    }
  }
`;

export const Wrapper = styled.div``;
