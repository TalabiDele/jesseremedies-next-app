import React from "react";
import { Container } from "./Style";
import {
  RiHandCoinLine,
  RiShieldUserLine,
  RiShieldCheckLine,
  RiCoinLine,
} from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";
import { useRouter } from "next/router";

const CreateUserNav = ({ loanInfo, personalInfo, financialInfo, review }) => {
  const router = useRouter();

  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <div
            className={
              router.pathname === "/create_user/loan_info"
                ? "item active"
                : "item"
            }
          >
            <RiHandCoinLine fontSize={30} />
          </div>
          <p
            className={
              router.pathname === "/create_user/loan_info"
                ? "text text_active"
                : "text"
            }
          >
            Loan Info
          </p>
        </div>
        ---------
        <div className="wrapper">
          <div
            className={
              router.pathname === "/create_user/personal_info"
                ? "item active"
                : "item"
            }
          >
            <RiShieldUserLine fontSize={30} />
          </div>
          <p
            className={
              router.pathname === "/create_user/personal_info"
                ? "text text_active"
                : "text"
            }
          >
            Personal Info
          </p>
        </div>
        ---------
        <div className="wrapper">
          <div
            className={
              router.pathname === "/create_user/financial_info"
                ? "item active"
                : "item"
            }
          >
            <RiCoinLine fontSize={30} />
          </div>
          <p
            className={
              router.pathname === "/create_user/financial_info"
                ? "text text_active"
                : "text"
            }
          >
            Financial Info
          </p>
        </div>
        ---------
        <div className="wrapper">
          <div
            className={
              router.pathname === "/create_user/guarantor_info"
                ? "item active"
                : "item"
            }
          >
            <BiBadgeCheck fontSize={30} />
          </div>
          <p
            className={
              router.pathname === "/create_user/guarantor_info"
                ? "text text_active"
                : "text"
            }
          >
            Guarantor Info
          </p>
        </div>
        ---------
        <div className="wrapper">
          <div
            className={
              router.pathname === "/create_user/review" ? "item active" : "item"
            }
          >
            <RiShieldCheckLine fontSize={30} />
          </div>
          <p
            className={
              router.pathname === "/create_user/review"
                ? "text text_active"
                : "text"
            }
          >
            Review
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CreateUserNav;
