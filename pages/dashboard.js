import React from "react";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard/dashboard";
import { API_URL } from "@/config/index";

const dashboard = ({ loans, customers }) => {
  return (
    <Layout>
      <Dashboard loans={loans} customers={customers} />
    </Layout>
  );
};

export default dashboard;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/loans?_sort=created_at:DESC&populate=*`);
  const loans = await res.json();

  const resCustomers = await fetch(`${API_URL}/customers?populate=*`);
  const customers = await resCustomers.json();

  return {
    props: { loans, customers },
  };
}
