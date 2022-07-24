import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @page {
   /* size: landscape; */
   margin: 1cm;
   background-color: #fff;
 }
`;

const PrintableBodyWrapper = styled.div`
  @media print {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  justify-items: center;

  .image {
    margin-bottom: 1rem;
  }

  div.container {
    background: #fff;
    box-shadow: 0px 4px 90px rgba(163, 171, 185, 0.24);
    border-radius: 20px;
    padding: 3rem;
    width: 80%;

    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 26px;
    }

    h2 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

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
        align-items: flex-start;

        input {
          width: 80%;
        }
      }

      select {
        border: none;
        background: #f5f7fb;
        padding: 1rem;
        border-radius: 5px;
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

      .btn {
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid #f5f7fb;
        /* display: flex;
        width: 5rem; */

        &:hover {
          border: 1px solid #0043f1;
          color: #0043f1;
        }
      }

      .active {
        background: #0043f1;
        color: #fff;
        border: 1px solid #0043f1;
      }
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

      button.print {
        background: none;
        border: 1px solid #0043f1;
        color: #0043f1;
        border-radius: 4px;

        &:hover {
          background: #000;
          border: 1px solid #000;
          color: #fff;
        }
      }
    }

    div.endorse,
    div.official {
      h3 {
        font-size: 18px;
        text-align: left;
        margin-top: 1rem;
      }
    }

    div.endorse {
      margin-bottom: 2rem;
    }

    div.signature {
      margin-bottom: 2rem;
    }

    div.signature,
    div.details,
    div.manager_details {
      display: flex;
      gap: 1rem;
    }

    div.wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 0.5rem;

      p {
        margin-bottom: 1rem;
        font-size: 13px;
      }

      span {
        font-weight: bold;
        border: 1px solid #cfcfcf;
        padding: 0.2rem;
        border-radius: 5px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  background-color: #fff;

  @media print {
    width: 100%;
    margin: auto;
    background-color: #fff;
    /* padding: 3rem; */

    .image {
      margin-bottom: 1rem;
    }

    div.endorse,
    div.official {
      h3 {
        font-size: 18px;
        text-align: left;
        margin-top: 1rem;
      }
    }

    div.endorse {
      margin-bottom: 2rem;
    }

    div.signature {
      margin-bottom: 2rem;
    }

    div.signature,
    div.details,
    div.manager_details {
      display: flex;
      gap: 1rem;
    }

    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 26px;
    }

    h2 {
      font-size: 16px;
      margin-bottom: 1rem;
    }

    div.wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 0.5rem;

      p {
        margin-bottom: 1rem;
        font-size: 13px;
      }

      h2 {
        font-size: 20px;
      }

      span {
        font-weight: bold;
        border: 1px solid #cfcfcf;
        padding: 0.2rem;
        border-radius: 5px;
      }
    }
  }
`;
