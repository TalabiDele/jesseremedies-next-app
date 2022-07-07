import React, { useState } from "react";
import Layout from "@/components/Layout";
import CreateUserNav from "@/components/CreateUserNav/CreateUserNav";
import Review from "@/components/CreateUser/Review";
import { useRouter } from "next/router";
import styled from "styled-components";

const ReviewPage = () => {
  const [loanInfo, setLoanInfo] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [financialInfo, setFinancialInfo] = useState(false);
  const [review, setReview] = useState(false);

  const router = useRouter();

  return (
    <Layout>
      <Back className="back" onClick={() => router.back()}>
        Back
      </Back>
      <CreateUserNav
        loanInfo={loanInfo}
        setLoanInfo={setLoanInfo}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        financialInfo={financialInfo}
        setFinancialInfo={setFinancialInfo}
        review={review}
        setReview={setReview}
      />
      <Review
        loanInfo={loanInfo}
        setLoanInfo={setLoanInfo}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        financialInfo={financialInfo}
        setFinancialInfo={setFinancialInfo}
        review={review}
        setReview={setReview}
      />
    </Layout>
  );
};

export default ReviewPage;

const Back = styled.div`
  margin-left: 20rem;
  position: relative;
  top: 4rem;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #0043f1;
  }
`;
