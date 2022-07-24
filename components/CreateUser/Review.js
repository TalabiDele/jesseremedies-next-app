import { useRouter } from "next/router";
import React, { useState, useContext, useRef } from "react";
import { Container, GlobalStyle, Wrapper } from "./style";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { TbCurrencyNaira } from "react-icons/tb";

const Review = ({ token }) => {
  const router = useRouter();
  const componentRef = useRef();
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
    guarantorHome,
    guarantorBirth,
    guarantorOffice,
    guarantorPhone,
    guarantorCareer,
    guarantorPosition,
    guarantorRelation,
    guarantorLength,
    guarantorPassport,
    guarantorName,
    guarantorEmployer,
    guarantorEmail,
    gender,
    position,
    employmentType,
    dependants,
    origin,
    salaryDate,
    user,
    addCommas,
  } = useContext(AuthContext);

  console.log(API_URL);

  const imageUploaded = async (e) => {
    console.log(passport);
    // e.preventDefault();
    // setUserInfo({ ...userInfo, user_image: e });
    const res = await fetch(`${API_URL}/customers/${e.data.id}?populate=*`);
    const data = await res.json();
    console.log(data);
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
          guarantor_name: guarantorName,
          guarantor_occupation: guarantorCareer,
          guarantor_phone: guarantorPhone,
          guarantor_email: guarantorEmail,
          guarantor_office: guarantorOffice,
          guarantor_birth: guarantorBirth,
          guarantor_home: guarantorHome,
          guarantor_employer: guarantorEmployer,
          guarantor_position: guarantorPosition,
          guarantor_relation: guarantorRelation,
          guarantor_length: guarantorLength,
          card_number: cardNumber,
          cvv,
          employee_position: position,
          employment_type: employmentType,
          dependants,
          state_or_origin: origin,
          gender,
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
    handleUploads(data);
    imageUploaded(data);
  };

  const handleUploads = async (e) => {
    console.log(passport);
    const passportData = new FormData();
    passportData.append("files", passport);
    passportData.append("ref", "api::customer.customer");
    passportData.append("refId", e.data.id);
    passportData.append("field", "passport");

    const resUpload = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: passportData,
    });

    const data = await resUpload.json();
    console.log("passport data", data);

    // if (resUpload.ok) {
    //   imageUploaded(data);
    // } else {
    // }

    const officeIdData = new FormData();
    officeIdData.append("files", officeId);
    officeIdData.append("ref", "api::customer.customer");
    officeIdData.append("refId", e.data.id);
    officeIdData.append("field", "office_id");

    const officeIdUpload = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: officeIdData,
    });

    const officeData = await officeIdUpload.json();
    console.log("Office ID data", officeData);

    const payslipForm = new FormData();
    payslipForm.append("files", payslip);
    payslipForm.append("ref", "api::customer.customer");
    payslipForm.append("refId", e.data.id);
    payslipForm.append("field", "payslip");

    const payslipRes = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: payslipForm,
    });

    const payslipData = await payslipRes.json();
    console.log("payslip data", payslipData);

    const utilityForm = new FormData();
    utilityForm.append("files", utility);
    utilityForm.append("ref", "api::customer.customer");
    utilityForm.append("refId", e.data.id);
    utilityForm.append("field", "utility");

    const resUtility = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: utilityForm,
    });

    const utilityData = await resUtility.json();
    console.log("utility data", utilityData);

    const cacForm = new FormData();
    cacForm.append("files", cac);
    cacForm.append("ref", "api::customer.customer");
    cacForm.append("refId", e.data.id);
    cacForm.append("field", "cac");

    const resCac = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: cacForm,
    });

    const cacData = await resCac.json();
    console.log("cac data", cacData);

    const memoForm = new FormData();
    memoForm.append("files", memo);
    memoForm.append("ref", "api::customer.customer");
    memoForm.append("refId", e.data.id);
    memoForm.append("field", "memo");

    const resMemo = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: memoForm,
    });

    const memoData = await resMemo.json();

    console.log("memo data", memoData);

    const guarantorForm = new FormData();
    guarantorForm.append("files", guarantorPassport);
    guarantorForm.append("ref", "api::customer.customer");
    guarantorForm.append("refId", e.data.id);
    guarantorForm.append("field", "guarantor_passport");

    const resGuarantor = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: guarantorForm,
    });

    const guarantorData = await resGuarantor.json();

    console.log("guarantor data", guarantorData);

    const signatureForm = new FormData();
    signatureForm.append("files", signature);
    signatureForm.append("ref", "api::customer.customer");
    signatureForm.append("refId", e.data.id);
    signatureForm.append("field", "signature");

    const resSignature = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: guarantorForm,
    });

    const signatureData = await resSignature.json();

    console.log("signature data", signatureData);
  };

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
    <>
      <Container>
        <GlobalStyle />
        <div className="container">
          <div className="top">
            <h1>Overview</h1>
            <button className="edit">Edit</button>
          </div>
          <Wrapper ref={(el) => (componentRef = el)}>
            <h3>Loan Application</h3>

            <div className="info">
              <h2>Personal Information</h2>
              <div className="wrapper">
                <p>
                  Full Name: <span>{firstName + " " + lastName}</span>
                </p>
                <p>
                  DOB: <span>{dob}</span>
                </p>
                <p>
                  Current Address: <span>{address}</span>
                </p>
                <p>
                  Residential State: <span>{state}</span>
                </p>
                <p>
                  Email Address: <span>{email}</span>
                </p>
                <p>
                  Phone Number: <span>{phoneNumber}</span>
                </p>
                <p>
                  Gender: <span>{gender}</span>
                </p>
                <p>
                  Position Held at Work: <span>{position}</span>
                </p>
                <p>
                  Employment Type: <span>{employmentType}</span>
                </p>
                <p>
                  Number of Dependants: <span>{dependants}</span>
                </p>
                <p>
                  State of Origin: <span>{origin}</span>
                </p>
                <p>
                  Salary Data: <span>{salaryDate}</span>
                </p>
                <p>
                  Reference Full Name: <span>{reference}</span>
                </p>
                <p>
                  Reference Phone Number: <span>{referenceNumber}</span>
                </p>
              </div>
            </div>

            <div className="info">
              <h2>Loan Information</h2>
              <div className="wrapper">
                <p>
                  Loan Amount Requested:{" "}
                  <span>
                    <TbCurrencyNaira />
                    {/* {addCommas(loanAmount)} */}
                    {loanAmount}
                  </span>
                </p>
                <p>
                  Purpose of Loan: <span>{loanPurpose}</span>
                </p>
                <p>
                  Interest: <span>{interest}%</span>
                </p>
                <p>
                  Monthly Payment:{" "}
                  <span>
                    <TbCurrencyNaira />
                    {/* {addCommas(monthlyPayment)} */}
                    {monthlyPayment}
                  </span>
                </p>
                <p>
                  Duration: <span>{duration} months</span>
                </p>
              </div>
            </div>

            <div className="info">
              <h2>Financial & Asset Information</h2>
              <div className="wrapper">
                <p>
                  Current Employment Status: <span>{employmentStatus}</span>
                </p>
                <p>
                  Current Employer: <span>{employer}</span>
                </p>
                <p>
                  Date Started: <span>{dateStarted}</span>
                </p>
                <p>
                  Work Contact Info (Email): <span>{workEmail}</span>
                </p>
                <p>
                  Work Phone Number: <span>{workNumber}</span>
                </p>
                <p>
                  Current Net Income:{" "}
                  <span>
                    <TbCurrencyNaira />
                    {/* {addCommas(income)} */}
                    {income}
                  </span>
                </p>
                <p>
                  Asset: <span>{asset}</span>
                </p>
                <p>
                  Asset Type: <span>{assetType}</span>
                </p>
                <p>
                  Value in Naira:{" "}
                  <span>
                    <TbCurrencyNaira />
                    {/* {addCommas(assetValue)} */}
                    {assetValue}
                  </span>
                </p>
                <p>
                  Debit Card Details for Monthly Debit (Optional):{" "}
                  <span>{cardNumber}</span>
                </p>
                <p>
                  CVV: <span>{cvv}</span>
                </p>
                <p>
                  Expiry Date: <span>{cardExpiry}</span>
                </p>
              </div>
            </div>
            {employmentType === "business owner" && (
              <div className="info">
                <h2>Guarantor Information</h2>
                <div className="wrapper">
                  <p>
                    Name: <span>{guarantorName}</span>
                  </p>
                  <p>
                    Place of Birth: <span>{guarantorBirth}</span>
                  </p>
                  <p>
                    Office Address: <span>{guarantorOffice}</span>
                  </p>
                  <p>
                    Home Address: <span>{guarantorHome}</span>
                  </p>
                  <p>
                    Office Employer: <span>{guarantorEmployer}</span>
                  </p>
                  <p>
                    Phone NUmber: <span>{guarantorPhone}</span>
                  </p>
                  <p>
                    Career: <span>{guarantorCareer}</span>
                  </p>
                  <p>
                    Position: <span>{guarantorPosition}</span>
                  </p>
                  <p>
                    Relationship: <span>{guarantorRelation}</span>
                  </p>
                  <p>
                    Email: <span>{guarantorEmail}</span>
                  </p>
                  <p>
                    How long have you known applicant:{" "}
                    <span>{guarantorLength} years</span>
                  </p>
                </div>
              </div>
            )}
            <div className="endorse">
              <h3>Endorsement</h3>
              <p>
                By putting my signature on this form{" "}
                <strong>
                  I accept that Jesse Remedies Nig. Ltd. can run several credit
                  checks on me
                </strong>
              </p>
            </div>
            <div className="signature">
              <p>Applicant{"'"}s Signature: ...............................</p>
              <p>Date: ................................</p>
            </div>

            <div className="official">
              <h3>FOR OFFICE USE ONLY</h3>
              <h3>Basis for Recomendation</h3>
              __________________________________________________________________________________________________________________________________________________________
              <div className="officer">
                <h3>Relationship Officer</h3>
                <div className="details">
                  <p>Name: _____________________________________</p>
                  <p>Signature: ________________________________________</p>
                  <p>Date: ___________________________________________</p>
                </div>
              </div>
              <div className="manager">
                <h3>Manager</h3>
                <div className="manager_details">
                  <p>Name: __________________________________________</p>
                  <p>Signature: _________________________________________</p>
                  <p>Date: ____________________________________________</p>
                </div>
              </div>
            </div>
          </Wrapper>
          <div className="btns">
            <button className="cancel">Cancel</button>
            <ReactToPrint
              // trigger={() => <button className="print">Print this out!</button>}
              content={() => componentRef}
            >
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <button onClick={handlePrint} className="print">
                    Print this out!
                  </button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            <button type="submit" className="submit" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Review;
