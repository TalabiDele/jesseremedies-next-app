import React, { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { Container, Wrapper } from "./style";
import { BtnLogin } from "../Buttons";
import bgImage from "@/public/forest.png";
import bgLeft from "@/public/forestLeft.png";
import bgRight from "@/public/forestRight.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <h1>
            Welcome, <span>:)</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email address</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@jesseremedies.com"
              className="input"
            />
            <label htmlFor="password">Enter your password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="input"
            />
            <div className="actions">
              <div className="save">
                <input
                  type="checkbox"
                  id="save"
                  name="save"
                  className="check"
                />
                <label htmlFor="save">Save my Password</label>
              </div>
              <p>Forgot Password</p>
            </div>
            <BtnLogin type="submit">Login</BtnLogin>
          </form>
        </div>
      </div>
      <Wrapper>
        <div className="img">
          <Image src={bgLeft} alt="" />
          <Image src={bgLeft} alt="" />
          <Image src={bgLeft} alt="" />
          {/* <Image src={bgImage} alt="" /> */}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Login;
