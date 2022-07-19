import React from "react";
import Layout from "@/components/Layout";
import Report from "@/components/Reports/Reports";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";

const Reports = ({ token, users, customers }) => {
  return (
    <Layout>
      <Report token={token} users={users} customers={customers} />
    </Layout>
  );
};

export default Reports;

export async function getServerSideProps({ req }) {
  const token = parseCookies(req);

  const res = await fetch(`${API_URL}/users?populate=*`);
  const users = await res.json();

  const resCustomers = await fetch(`${API_URL}/customers?populate=*`);
  const customers = await resCustomers.json();

  return {
    props: { users, token, customers },
  };
}
