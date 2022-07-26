import React from "react";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Search from "@/components/Search/Search";

const search = ({ items, loanId, searchUser }) => {
  console.log("customer name", items);
  console.log("Loan Id", loanId);
  console.log("Users", searchUser);

  return (
    <Layout>
      <Search items={items} loanId={loanId} searchUser={searchUser} />
    </Layout>
  );
};

export default search;

export async function getServerSideProps({ query: { term } }) {
  // const query = qs.stringify({
  //   _where: {
  //     _or: [{ post_contains: term }],
  //   },
  // });

  const res = await fetch(
    `${API_URL}/customers?populate=*&filters[$or][0][firstname][$containsi]=${term}&filters[$or][1][lastname][$containsi]=${term}`
  );
  const items = await res.json();

  const resLoanId = await fetch(
    `${API_URL}/customers?populate=*&filters[loans][loan_id][$containsi]=${term}`
  );
  const loanId = await resLoanId.json();

  const resUser = await fetch(
    `${API_URL}/customers?populate=*&filters[user][username][$containsi]=${term}`
  );
  const searchUser = await resUser.json();

  return {
    props: { items, loanId, searchUser },
  };
}
