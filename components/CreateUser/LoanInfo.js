import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Container } from "./style";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";

const LoanInfo = ({
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
  const {
    loanAmount,
    setLoanAmount,
    loanPurpose,
    setLoanPurpose,
    duration,
    setDuration,
    interest,
    setInterest,
    monthlyPayment,
    setMonthlyPayment,
  } = useContext(AuthContext);

  // console.log("S00" + Math.random().toString(36).substr(2, 2));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch(`${API_URL}/loans`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({
    //     amount: loanAmount,
    //     interest,
    //     duration,
    //     processing: true,
    //     monthly_payment: monthlyPayment,
    //     loan_id: "S00" + Math.random().toString(36).substr(2, 2),
    //   }),
    // });

    // const data = await res.json();
    // setIsPosted(data);
    // console.log(data);

    router.push("/create_user/personal_info");
  };

  return (
    <Container>
      <div className="container">
        <h1>Loan Information</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="no_flex">
            <label htmlFor="loan_amount">Loan Amount Requested</label>
            <input
              type="number"
              placeholder="N 50,000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <label htmlFor="duration">Duration of Loan</label>
            <input
              type="number"
              placeholder="3 months"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor="interest">Interest Rate</label>
            <input
              type="number"
              placeholder="10%"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
            <label htmlFor="monthly_payment">Monthly Payment</label>
            <input
              type="number"
              placeholder="N100,000"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
            />
            <label htmlFor="monthly_payment">Purpose of Loan</label>
            <input
              type="text"
              placeholder="State Purpose"
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
            />
          </div>
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

export default LoanInfo;
