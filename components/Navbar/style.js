import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fcfcfc;

  .container {
    display: grid;
    grid-template-columns: 20% 50% 30%;
    justify-items: center;
    width: 100%;
    margin: auto;
    align-items: center;
    padding: 1rem 0rem;
  }

  h1 {
    font-size: 20px;
  }

  input {
    border: none;
    background: #f4f4f4;
    padding: 1rem 1rem;
    border-radius: 10px;
    width: 50%;
    justify-self: flex-start;
  }

  div.user_info {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: #11142d;
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
    }

    p.type {
      color: #808191;
      font-size: 12px;
    }
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
  width: 10%;
  height: 100vh;
  padding: 2rem 0rem;

  div.wrapper {
    width: 90%;
    margin: auto;
  }

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 1rem;
    color: #1f417381;
  }
`;
