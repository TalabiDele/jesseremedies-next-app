import React, { useContext, useState } from "react";
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
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../Search/Search";
import { API_URL } from "@/config/index";

const Nav = () => {
  const qs = require("qs");

  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState();

  const { user, logout, search, setSearch } = useContext(AuthContext);

  const router = useRouter();

  const handleSearchChange = async (e) => {
    setIsSearch(true);

    setSearch(e.target.value);

    const query = qs.stringify(
      {
        filters: {
          $or: [
            {
              $and: [
                { firstname: { $notNull: true } },
                { firstname: { $eq: search } },
                { firstname: { $eq: search } },
              ],
            },
            {
              $and: [
                { firstname: { $null: true } },
                { lastname: { $eq: search } },
                { lastname: { $eq: search } },
              ],
            },
          ],
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    if (e.target.value === "") {
      setIsSearch(false);
    }

    console.log(e.target.value);

    const res = await fetch(
      `${API_URL}/customers?filters[firstname][$eq]=chima`,
      {
        method: "GET",
        // headers: {
        // "Content-Type": "application/json",filters[firstname][$contains][$eq]&filters[user][username][$eq]&filters[firstname]
        // Authorization: `Bearer ${token}`,
        // },
        // body: JSON.stringify(postItem),
      }
    );

    const data = await res.json();
    setSearchData(data);
    console.log(data);
  };

  return (
    <>
      <>
        <Search searchData={searchData} />
        <Container>
          <div className="container">
            <h1>Jesse Remedies</h1>
            <input
              type="text"
              placeholder="Search User, Loan Id etc"
              onChange={(e) => handleSearchChange(e)}
            />
            <div className="user_info">
              <Image src={userImage} alt="user image" width={50} height={50} />
              {user && (
                <div className="username">
                  <p>{user.username}</p>
                  {user.teller && <p className="type">Loan Officer</p>}
                  {user.supervisor && <p className="type">Supervisor</p>}
                  {user.manager && <p className="type">Manager</p>}
                  {user.md && <p className="type">MD</p>}
                </div>
              )}
            </div>
          </div>
        </Container>
        <Wrapper>
          <div className="wrapper">
            <ul>
              <Link href="/dashboard">
                <a className={router.pathname === "/dashboard" ? "active" : ""}>
                  <li>
                    <RiFunctionLine color="#1F4173" fontSize={30} />{" "}
                    <p>Dashboard</p>
                  </li>
                </a>
              </Link>
              {user && user.supervisor && user.manager && (
                <Link href="/loans">
                  <a className={router.pathname === "/loans" ? "active" : ""}>
                    <li>
                      <RiHandCoinLine color="#1F4173" fontSize={30} />{" "}
                      <p>Loans</p>
                    </li>
                  </a>
                </Link>
              )}
              <Link href="/users">
                <a className={router.pathname === "/users" ? "active" : ""}>
                  <li>
                    <RiFolderUserLine color="#1F4173" fontSize={30} />{" "}
                    <p>Users</p>
                  </li>
                </a>
              </Link>
              {/* <Link href="/assigned">
                <a className={router.pathname === "/assigned" ? "active" : ""}>
                  <li>
                    <RiUserReceived2Line color="#1F4173" fontSize={30} />{" "}
                    <p>Assigned</p>
                  </li>
                </a>
              </Link> */}
              <Link href="/report">
                <a className={router.pathname === "/report" ? "active" : ""}>
                  <li>
                    <RiLineChartLine color="#1F4173" fontSize={30} />{" "}
                    <p>Report</p>
                  </li>
                </a>
              </Link>
              <Link href="/profile">
                <a className={router.pathname === "/profile" ? "active" : ""}>
                  <li>
                    <RiAccountCircleLine color="#1F4173" fontSize={30} />{" "}
                    <p>Profile</p>
                  </li>
                </a>
              </Link>
              <li onClick={() => logout()}>
                <RiAccountCircleLine color="#1F4173" fontSize={30} /> Logout
              </li>
            </ul>
          </div>
        </Wrapper>
      </>
    </>
  );
};

export default Nav;
