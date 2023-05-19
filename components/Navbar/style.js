import styled from "styled-components";

export const All = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1;
  top: 0;

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

  form {
    width: 100%;
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
  /* position: fixed; */
  left: 0;
  right: 0;
  background: #fff;
  width: 10%;
  height: 100vh;
  padding: 2rem 0rem;

  div.wrapper {
    width: 100%;
    margin: auto;
  }

  .active {
    transition: all 0.3s ease-in-out;

    li {
      border-left: 5px solid #003ad2;
      width: 100%;
    }

    p {
      background: #f5f7fb;
      border-radius: 37px 0px 0px 37px;

      margin: auto;
    }
  }

  ul {
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    /* margin-bottom: 1rem; */
    color: #1f417381;

    p {
      width: 80%;
      padding: 0.8rem 1rem;
    }

    svg {
      margin-left: 1rem;
    }
  }
`;
