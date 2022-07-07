import React, { useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";

const PersonalInfo = ({
  loanInfo,
  setLoanInfo,
  personalInfo,
  setPersonalInfo,
  financialInfo,
  setFinancialInfo,
  review,
  setReview,
}) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPersonalInfo(false);
    setFinancialInfo(true);

    router.push("/create_user/financial_info");
  };

  return (
    <Container>
      <div className="container">
        <h1>Personal Information</h1>
        <form action="" onSubmit={handleSubmit}>
          {/* <div className="no_flex"> */}
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="firstname">First Name</label>
              <input type="text" placeholder="Bayo" />
            </div>
            <div className="no_flex">
              <label htmlFor="Lastname">Last Name</label>
              <input type="text" placeholder="Ojo" />
            </div>
            <div className="no_flex">
              <label htmlFor="dob">DOB</label>
              <input type="date" />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="address">Current Address</label>
              <input type="text" placeholder="2, abc street, defg" />
            </div>
            <div className="no_flex">
              <label htmlFor="state">Residential State</label>
              <input type="text" placeholder="Lagos" />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="johdoe@email.com" />
            </div>
            <div className="no_flex">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" placeholder="081*********" />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="reference">Reference Full Name</label>
              <input type="text" placeholder="Rufus Giwa" />
            </div>
            <div className="no_flex">
              <label htmlFor="ref_number">Reference Phone Number</label>
              <input type="number" placeholder="081*********" />
            </div>
          </div>

          {/* </div> */}
          <div className="btns">
            <button className="cancel">Cancel</button>
            <button type="submit" className="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default PersonalInfo;
