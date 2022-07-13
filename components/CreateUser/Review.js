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
    passport,
    officeId,
    payslip,
    utility,
    cac,
    memo,
    user,
  } = useContext(AuthContext);

  console.log(API_URL);

  const imageUploaded = async (e) => {
    // e.preventDefault();
    // setUserInfo({ ...userInfo, user_image: e });

    const res = await fetch(`${API_URL}/customers/${e.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passport,
        office_id: officeId,
        cac,
        payslip,
        utility,
        memo,
      }),
    });
    const data = await res.json();
    console.log(data);
    // setIsPosted(data);
    // setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        },
      }),
    });

    const data = await res.json();
    console.log(data.data.id);

    handleLoanRes(data);
    // handleUploads(data);
    // imageUploaded(data);
  };

  // const handleUploads = async (e) => {
  //   console.log(e);
  //   const passportData = new FormData();
  //   passportData.append("files", passport);
  //   passportData.append("ref", "customers");
  //   passportData.append("refId", e.data.id);
  //   passportData.append("field", "passport");

  //   const resUpload = await fetch(`http://localhost:1337/api/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: passportData,
  //   });

  //   const data = await resUpload.json();
  //   console.log("passport data", data);

  //   // if (resUpload.ok) {
  //   //   imageUploaded(data);
  //   // } else {
  //   // }

  //   const officeIdData = new FormData();
  //   officeIdData.append("files", officeId);
  //   // officeIdData.append("ref", "user");
  //   officeIdData.append("refId", e.data.id);
  //   officeIdData.append("field", "office_id");

  //   const officeIdUpload = await fetch(`${API_URL}/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: officeIdData,
  //   });

  //   const officeData = await officeIdUpload.json();
  //   console.log("Office ID data", officeData);

  //   const payslipForm = new FormData();
  //   payslipForm.append("files", payslip);
  //   // payslipForm.append("ref", "user");
  //   payslipForm.append("refId", e.data.id);
  //   payslipForm.append("field", "payslip");

  //   const payslipRes = await fetch(`http://localhost:1337/api/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: payslipForm,
  //   });

  //   const payslipData = await payslipRes.json();
  //   console.log("payslip data", payslipData);

  //   const utilityForm = new FormData();
  //   utilityForm.append("files", utility);
  //   // utilityForm.append("ref", "user");
  //   utilityForm.append("refId", e.data.id);
  //   utilityForm.append("field", "utility");

  //   const resUtility = await fetch(`http://localhost:1337/api/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: utilityForm,
  //   });

  //   const utilityData = await resUtility.json();
  //   console.log("utility data", utilityData);

  //   const cacForm = new FormData();
  //   cacForm.append("files", cac);
  //   // cacForm.append("ref", "user");
  //   cacForm.append("refId", e.data.id);
  //   cacForm.append("field", "cac");

  //   const resCac = await fetch(`http://localhost:1337/api/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: cacForm,
  //   });

  //   const cacData = await resCac.json();
  //   console.log("cac data", cacData);

  //   const memoForm = new FormData();
  //   memoForm.append("files", memo);
  //   // memoForm.append("ref", "user");
  //   memoForm.append("refId", e.data.id);
  //   memoForm.append("field", "memo");

  //   const resMemo = await fetch(`http://localhost:1337/api/upload`, {
  //     method: "POST",
  //     // headers: {
  //     //   // "Content-Type": "multipart/form-data",
  //     //   Authorization: `Bearer ${token}`,
  //     // },
  //     body: memoForm,
  //   });

  //   const memoData = await resMemo.json();

  //   console.log("memo data", memoData);
  // };

  const handleLoanRes = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans?populate=*`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
