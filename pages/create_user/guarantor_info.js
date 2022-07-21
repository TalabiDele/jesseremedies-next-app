import React from "react";
import Layout from "@/components/Layout";
import CreateUserNav from "@/components/CreateUserNav/CreateUserNav";
import GuarantorInfo from "@/components/CreateUser/GuarantorInfo";
import { useRouter } from "next/router";
import styled from "styled-components";

const guarantor_info = () => {
  return (
    <Layout>
      <Back className="back" onClick={() => router.back()}>
        Back
      </Back>
      <CreateUserNav />
      <GuarantorInfo />
    </Layout>
  );
};

export default guarantor_info;

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
