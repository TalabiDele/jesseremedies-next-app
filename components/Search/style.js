import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;

  div.container {
    margin: 3rem auto;
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    width: 90%;
    padding-bottom: 10rem;
    font-size: 14px;
    padding-top: 2rem;

    h2 {
      width: 80%;
      margin: 0rem auto 1rem auto;
    }
  }

  div.wrapper {
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e6eaf0;
    padding-bottom: 1rem;

    button {
      width: 10%;
      padding: 0.5rem 0rem;
      border: 1px solid rgba(46, 124, 246, 1);
      background: none;
      color: rgba(46, 124, 246, 1);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(46, 124, 246, 1);
        color: #fff;
      }
    }

    div.contain {
      display: flex;
      justify-content: center;
      margin: auto;
      gap: 3rem;
      width: 80%;
    }

    p {
      flex: 1 1 30%;
      margin: auto;
    }

    .btn {
      border-radius: 5px;
      padding: 0.5rem;
      width: 50%;
      margin: auto;
      text-align: center;
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

    .start {
      color: rgba(46, 124, 246, 1);
      background: rgba(46, 124, 246, 0.1);
    }

    .due_soon {
      color: rgba(255, 153, 0, 1);
      background: rgba(255, 153, 0, 0.1);
    }

    .overdue {
      color: #e80000;
      background: #e800002f;
    }

    .total {
      font-size: 14px;
      color: #1f4173;
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        font-weight: 400;
      }
    }
  }
`;
