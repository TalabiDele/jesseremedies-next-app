import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 3rem 1rem 15rem;

  p {
    font-size: 14px;
  }

  h1 {
    font-size: 26px;
  }

  div.all {
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 2rem;
  }

  div.top_cards {
    display: flex;
    gap: 3rem;
  }

  div.card {
    display: flex;
    align-items: center;
    gap: 3rem;
    background: #ffffff;
    border-radius: 15px;
    padding: 2rem;
  }

  div.orders {
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    width: 90%;
    margin-top: 3rem;
    padding-bottom: 10rem;
    font-size: 14px;
    padding-top: 2rem;
    /* padding: 2rem; */

    h2 {
      font-size: 16px;
      color: #1f4173;
      margin: 0rem 2rem;
    }

    div.search {
      display: flex;
      align-items: flex-end;
      width: 90%;
      justify-content: center;
      margin: 1rem auto;
      gap: 4rem;
      color: #1f4173;

      div.input {
        display: grid;
        width: 70%;

        input {
          border: none;
          border-bottom: 1px solid #e6eaf0;
          padding: 0.3rem 1rem 1rem 0rem;
          font-size: 13px;
        }

        label {
          font-size: 13px;
          color: #717a8a;
        }
      }

      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }

    div.table {
      width: 100%;
      margin: auto;

      ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        justify-items: center;
        margin: 2rem 0rem 1rem 0rem;
        border-bottom: 1px solid #e6eaf0;
        padding-bottom: 1rem;

        li {
          font-weight: 700;
          font-size: 12px;
          color: #1f4173;
        }
      }

      div.loan {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        width: 100%;
        border-bottom: 1px solid #e6eaf0;
        padding-bottom: 1rem;
        margin-bottom: 1rem;

        .id {
          color: #003ad2;
          text-transform: uppercased;
        }

        .name {
          color: #1f4173;
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
    }
  }

  div.wrapper {
    width: 60%;
  }

  div.actions {
    background: #ffffff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    color: #11142d;
    /* padding: 2rem; */
    /* width: 70%; */
  }

  div.btn {
    width: 100%;
    display: grid;
    justify-items: flex-end;
  }

  button {
    margin: 2rem 0rem 0rem 0rem;
    width: 90%;
    border: none;
    background: #0043f1;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px 0px 0px 20px;
    color: #ffffff;
    padding: 1.5rem 0rem;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }

  div.account {
    padding: 3rem;
  }

  div.item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 14px;
  }

  div.recent {
    color: #11142d;
    background: #ffffff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    margin-top: 2rem;
    padding: 1rem 0rem 1rem 2rem;

    h2 {
      font-size: 18px;
      margin-bottom: 2rem;
    }

    img {
      border-radius: 15px;
    }

    div.recent_customers {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 1rem;
    }

    div.details {
      font-weight: 500;
      font-size: 14px;

      p {
        font-weight: 400;
        font-size: 12px;
      }
    }

    .loaned {
      color: #2e7cf6;
    }

    .paid {
      color: #16c35b;
    }

    .due_soon {
      color: #ff5f00;
    }

    .overdue {
      color: #ff2727;
    }

    .processing {
      color: #24bdc7;
    }
  }
`;

export const Wrapper = styled.div``;
