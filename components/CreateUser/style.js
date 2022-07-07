import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  justify-items: center;

  div.container {
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    padding: 3rem;
    width: 80%;

    h1 {
      font-size: 24px;
      color: #1f4173;
      margin-bottom: 1rem;
    }

    form {
      width: 100%;
      display: grid;

      div.no_flex {
        display: grid;
        width: 100%;
      }

      div.flex_three {
        display: grid;
        grid-template-columns: 30% 30% 30%;

        input {
          width: 80%;
        }
      }

      div.flex_two {
        display: grid;
        grid-template-columns: 60% 30%;

        input {
          width: 80%;
        }
      }

      input {
        width: 50%;
        border: none;
        background: #f5f7fb;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
      }

      label {
        color: #11142d;
        margin-bottom: 0.5rem;
        font-size: 16px;
      }

      div.btns {
        display: flex;
        gap: 10px;
        width: 80%;
        justify-content: flex-end;
        margin-top: 2rem;

        button {
          padding: 1rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        button.cancel {
          border: none;
          background: none;
          color: #5a5a5a;
          font-size: 14px;

          &:hover {
            color: #0043f1;
          }
        }

        button.submit {
          background: #0043f1;
          border-radius: 4px;
          border: none;
          color: #fff;
          border: 1px solid #0043f1;

          &:hover {
            color: #0043f1;
            background: none;
            border: 1px solid #0043f1;
          }
        }
      }
    }
  }
`;
