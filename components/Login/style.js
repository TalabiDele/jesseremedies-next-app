import styled from "styled-components";

export const Container = styled.div`
  background: #e6ecfb;
  width: 100%;
  height: 100vh;
  color: #11142d;
  display: grid;

  div.container {
    background: #fdfdfd;
    border-radius: 10px;
    width: 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;

    h1 {
      font-size: 32px;
      margin-bottom: 2rem;
    }

    span {
      color: rgba(0, 67, 241, 1);
    }
  }

  div.wrapper {
    width: 90%;
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;

    label {
      font-size: 14px;
    }

    input.input {
      font-size: 12px;
      width: 100%;
      background: #fff;
      border: none;
      padding: 1rem;
      border-bottom: 1px solid #e6eaf0;
    }

    div.actions {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 2rem;
      margin-top: 1rem;
    }

    div.save {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;

  .img {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 20%;
    position: absolute;
    bottom: 0;
  }

  img {
    width: 35%;
    height: 100%;
  }
`;
