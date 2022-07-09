import React from "react";
import Layout from "@/components/Layout";
import UsersPage from "@/components/Users/Users";
import { API_URL } from "@/config/index";

const Users = ({ customers }) => {
  return (
    <Layout>
      <UsersPage customers={customers} />
    </Layout>
  );
};

export default Users;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/loans?_sort=created_at:DESC&populate=*`);
  const loans = await res.json();

  const resCustomers = await fetch(`${API_URL}/customers?populate=*`);
  const customers = await resCustomers.json();

  return {
    props: { loans, customers },
  };
}
