import React from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Customer from "@/components/CustomerProfile/Customer";
import { parseCookies } from "@/helpers/index";

const Slug = ({ customers, token }) => {
  return (
    <Layout>
      <Customer customers={customers} token={token} />
    </Layout>
  );
};

export default Slug;

export async function getServerSideProps({ params, req }) {
  const { token } = parseCookies(req);

  const { slug } = params;

  const res = await fetch(
    `${API_URL}/customers?filters[slug]=${slug}&populate=*`
  );
  const customers = await res.json();
  console.log(customers);

  return {
    props: { customers: customers.data, token },
  };
}
