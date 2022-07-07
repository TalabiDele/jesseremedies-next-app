import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "./style";

const Review = ({
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

    setLoanInfo(false);
    setPersonalInfo(true);

    router.push("/create_user/personal_info");
  };

  return (
    <Container>
      <div className="container">
        <h1>Loan Information</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="no_flex">
            <label htmlFor="loan_amount">Loan Amount Requested</label>
            <input type="number" placeholder="N 50,000" />
            <label htmlFor="duration">Duration of Loan</label>
            <input type="number" placeholder="3 months" />
            <label htmlFor="interest">Interest Rate</label>
            <input type="number" placeholder="10%" />
          </div>
          <div className="btns">
            <button className="cancel">Cancel</button>
            <button type="submit" className="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Review;
