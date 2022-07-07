import React, { useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";

const FinancialInfo = ({
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

    router.push("/create_user/review");
  };

  return (
    <Container>
      <div className="container">
        <h1>Loan Information</h1>
        <form action="" onSubmit={handleSubmit}>
          {/* <div className="no_flex"> */}
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="employ_status">Current Employment Status</label>
              <input type="text" placeholder="Employed" />
            </div>
            <div className="no_flex">
              <label htmlFor="employer">Current Employer</label>
              <input type="text" placeholder="ABC Limited" />
            </div>
            <div className="no_flex">
              <label htmlFor="date_started">Date Started</label>
              <input type="date" />
            </div>
          </div>
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="work_email">Work Contact Info (Email)</label>
              <input type="email" placeholder="johndoe@email.com" />
            </div>
            <div className="no_flex">
              <label htmlFor="work_number">Work Phone Numer</label>
              <input type="number" placeholder="081*********" />
            </div>
            <div className="no_flex">
              <label htmlFor="income">Current net Income</label>
              <input type="number" placeholder="N500,000" />
            </div>
          </div>
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="asset">Asset</label>
              <input type="text" placeholder="Land" />
            </div>
            <div className="no_flex">
              <label htmlFor="asset_type">Asset Type</label>
              <input type="text" placeholder="Fixed" />
            </div>
            <div className="no_flex">
              <label htmlFor="value_naira">Value in Naira</label>
              <input type="number" placeholder="N500,000" />
            </div>
          </div>
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="card_number">
                Debit Card Details for Monthly Debit (Optional)
              </label>
              <input type="number" placeholder="1234 5678 1234 5678" />
            </div>
            <div className="no_flex">
              <label htmlFor="cvv">CVV</label>
              <input type="number" placeholder="123" />
            </div>
            <div className="no_flex">
              <label htmlFor="expiry_date">Expiry Date</label>
              <input type="month" />
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

export default FinancialInfo;
