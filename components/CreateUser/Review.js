import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Container } from "./style";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";

const Review = ({ token }) => {
  const router = useRouter();
  const [loanData, setLoanData] = useState({});

  const {
    firstName,
    lastName,
    address,
    state,
    email,
    dob,
    phoneNumber,
    reference,
    referenceNumber,
    loanAmount,
    duration,
    interest,
    loanPurpose,
    employmentStatus,
    employer,
    dateStarted,
    workEmail,
    workNumber,
    income,
    asset,
    assetType,
    assetValue,
    cardNumber,
    cvv,
    cardExpiry,
    monthlyPayment,
    user,
  } = useContext(AuthContext);

  console.log(API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoanData({
      data: {
        interest,
        duration,
        processing: true,
        monthly_payment: monthlyPayment,
        loan_id: "S00" + Math.random().toString(36).substr(2, 2),
        amount: loanAmount,
      },
    });

    const res = await fetch(`${API_URL}/customers?populate=*`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          firstname: firstName,
          lastname: lastName,
          address,
          phone_1: phoneNumber,
          customer_id: Math.random().toString(36).substr(2, 5),
          // dob,
          email,
          reference_name: reference,
          reference_number: referenceNumber,
          employment_status: employmentStatus,
          employer,
          // date_started: dateStarted,
          work_email: workEmail,
          work_number: workNumber,
          current_income: income,
          asset,
          asset_type: assetType,
          value_of_asset: assetValue,
          card_number: cardNumber,
          cvv,
          // card_expiry: cardExpiry,
          state,
          user: {
            id: user.id,
          },
          // loans: {
          //   data: [
          //     {
          //       interest,
          //       duration,
          //       processing: true,
          //       monthly_payment: monthlyPayment,
          //       loan_id: "S00" + Math.random().toString(36).substr(2, 2),
          //       amount: loanAmount,
          //     },
          //   ],
          // },
        },
      }),
    });

    const data = await res.json();
    console.log(data.data.id);

    handleLoanRes(data);
  };

  const handleLoanRes = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans?populate=*`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          interest,
          duration,
          processing: true,
          monthly_payment: monthlyPayment,
          loan_id: "S00" + Math.random().toString(36).substr(2, 2),
          amount: loanAmount,
          customer: {
            id: e.data.id,
          },
        },
      }),
    });

    const loanData = loanRes.json();
    console.log(loanData);
  };

  return (
    <Container>
      <div className="container">
        <div className="top">
          <h1>Overview</h1>
          <button className="edit">Edit</button>
        </div>

        <div className="info">
          <h2>Loan Information</h2>
          <p>
            Loan Amount Requested: <span>{loanAmount}</span>
          </p>
          <p>
            Purpose of Loan <span>{loanPurpose}</span>
          </p>
          <p>
            Interest <span>{interest}</span>
          </p>
          <p>
            Monthly Payment <span>{monthlyPayment}</span>
          </p>
          <p>
            Duration <span>{duration} months</span>
          </p>
        </div>

        <div className="info">
          <h2>Personal Information</h2>
          <p>
            Full Name <span>{firstName + " " + lastName}</span>
          </p>
          <p>
            DOB <span>{dob}</span>
          </p>
          <p>
            Current Address <span>{address}</span>
          </p>
          <p>
            Residential State <span>{state}</span>
          </p>
          <p>
            Email Address <span>{email}</span>
          </p>
          <p>
            Phone Number <span>{phoneNumber}</span>
          </p>
          <p>
            Reference Full Name <span>{reference}</span>
          </p>
          <p>
            Reference Phone Number <span>{referenceNumber}</span>
          </p>
        </div>

        <div className="info">
          <h2>Financial & Asset Information</h2>
          <p>
            Current Employment Status <span>{employmentStatus}</span>
          </p>
          <p>
            Current Employer <span>{employer}</span>
          </p>
          <p>
            Date Started <span>{dateStarted}</span>
          </p>
          <p>
            Work Contact Info (Email) <span>{workEmail}</span>
          </p>
          <p>
            Work Phone Number <span>{workNumber}</span>
          </p>
          <p>
            Current Net Income <span>{income}</span>
          </p>
          <p>
            Asset <span>{asset}</span>
          </p>
          <p>
            Asset Type <span>{assetType}</span>
          </p>
          <p>
            Value in Naira <span>{assetValue}</span>
          </p>
          <p>
            Debit Card Details for Monthly Debit (Optional):{" "}
            <span>{cardNumber}</span>
          </p>
          <p>
            CVV <span>{cvv}</span>
          </p>
          <p>
            Expiry Date <span>{cardExpiry}</span>
          </p>
        </div>
        <div className="btns">
          <button className="cancel">Cancel</button>
          <button type="submit" className="submit" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Review;
