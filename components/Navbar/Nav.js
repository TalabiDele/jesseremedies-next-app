import React, { useContext } from "react";
import { Container, Wrapper } from "./style";
import userImage from "@/public/userImage.png";
import {
  RiFunctionLine,
  RiHandCoinLine,
  RiFolderUserLine,
  RiUserReceived2Line,
  RiLineChartLine,
  RiAccountCircleLine,
} from "react-icons/ri";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);

  // if (location.pathname === "/login") {
  //   console.log("login");
  // }

  return (
    <>
      <>
        <Container>
          <div className="container">
            <h1>Jesse Remedies</h1>
            <input type="text" placeholder="Search User, Loan Id etc" />
            <div className="user_info">
              <Image src={userImage} alt="user image" width={50} height={50} />
              {user && (
                <div className="username">
                  <p>{user.username}</p>
                  {user.teller && <p className="type">Teller</p>}
                  {user.supervisor && <p className="type">Supervisor</p>}
                  {user.manager && <p className="type">Manager</p>}
                </div>
              )}
            </div>
          </div>
        </Container>
        <Wrapper>
          <div className="wrapper">
            <ul>
              <li>
                <RiFunctionLine color="#1F4173" fontSize={23} /> Dashboard
              </li>
              <li>
                <RiHandCoinLine color="#1F4173" fontSize={23} /> Loans
              </li>
              <li>
                <RiFolderUserLine color="#1F4173" fontSize={23} /> Users
              </li>
              <li>
                <RiUserReceived2Line color="#1F4173" fontSize={23} /> Assigned
              </li>
              <li>
                <RiLineChartLine color="#1F4173" fontSize={23} /> Report
              </li>
              <li>
                <RiAccountCircleLine color="#1F4173" fontSize={23} /> Profile
              </li>
              <li onClick={() => logout()}>
                <RiAccountCircleLine color="#1F4173" fontSize={23} /> Logout
              </li>
            </ul>
          </div>
        </Wrapper>
      </>
    </>
  );
};

export default Nav;
