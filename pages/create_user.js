import React, { useState } from "react";
import Layout from "@/components/Layout";
import CreateUserNav from "@/components/CreateUserNav/CreateUserNav";
import LoanInfo from "@/components/CreateUser/LoanInfo";
import PersonalInfo from "@/components/CreateUser/PersonalInfo";

const Create_user = () => {
  const [loanInfo, setLoanInfo] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [financialInfo, setFinancialInfo] = useState(false);
  const [review, setReview] = useState(false);

  return (
    <Layout>
      {/* <CreateUserNav
        loanInfo={loanInfo}
        setLoanInfo={setLoanInfo}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        financialInfo={financialInfo}
        setFinancialInfo={setFinancialInfo}
        review={review}
        setReview={setReview}
      />
      {loanInfo && (
        <LoanInfo
          loanInfo={loanInfo}
          setLoanInfo={setLoanInfo}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          financialInfo={financialInfo}
          setFinancialInfo={setFinancialInfo}
          review={review}
          setReview={setReview}
        />
      )}
      {personalInfo && (
        <PersonalInfo
          loanInfo={loanInfo}
          setLoanInfo={setLoanInfo}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          financialInfo={financialInfo}
          setFinancialInfo={setFinancialInfo}
          review={review}
          setReview={setReview}
        />
      )} */}
    </Layout>
  );
};

export default Create_user;
