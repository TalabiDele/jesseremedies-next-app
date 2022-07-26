import React, { useContext } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import AuthContext from "@/context/AuthContext";

const Search = ({ items, searchUser, loanId }) => {
  const router = useRouter();

  const { addCommas } = useContext(AuthContext);

  console.log(router.query.term);

  const handlePush = (e) => {
    router.push(`/${e}`);
  };

  return (
    <Container>
      <div className="container">
        <h2>
          You searched for {"'"}
          {router.query.term}
          {"'"}
        </h2>
        {/* {items.data.length > 0 && */}
        {items.data.map((e) => (
          <div key={e.id} className="wrapper">
            <div className="contain">
              <p>{e.attributes.slug}</p>
              <p>{e.attributes.firstname + " " + e.attributes.lastname}</p>
              <p>{e.attributes.email}</p>
              <p>{e.attributes.phone_1}</p>
              <button onClick={() => handlePush(e.attributes.slug)}>
                View More
              </button>
            </div>
          </div>
        ))}
        {/* {searchUser.data.length > 0 && */}
        {searchUser.data.map((e) => (
          <div key={e.id} className="wrapper">
            <div className="contain">
              <p>{e.attributes.user.data.attributes.username}</p>
              <button>View Profile</button>
            </div>
          </div>
        ))}
        {/* {loanId.data.lenght > 0 && */}
        {loanId.data.map((e) =>
          e.attributes.loans.data.map((loan) => (
            <div key={loan.id} className="wrapper">
              <div className="contain">
                <p>{loan.attributes.loan_id}</p>
                <p>{e.attributes.firstname + " " + e.attributes.lastname}</p>
                {loan.attributes.disbursed && (
                  <p className="loaned btn">Disbursed</p>
                )}
                {loan.attributes.paid && <p className="paid btn">Paid</p>}
                {loan.attributes.approved && (
                  <p className="paid btn">Approved</p>
                )}
                {loan.attributes.due_soon && (
                  <p className="due_soon btn">Loan Due Soon</p>
                )}
                {loan.attributes.overdue && (
                  <p className="overdue btn">Loan Overdue</p>
                )}
                {loan.attributes.processing && (
                  <p className="processing btn">Processing</p>
                )}
                {loan.attributes.loan_start && (
                  <p className="start btn">Loaned</p>
                )}
                {loan.attributes.denied && (
                  <p className="overdue btn">Denied</p>
                )}
                <p className="total">
                  <TbCurrencyNaira fontSize={20} color="#1F4173" />
                  {addCommas(loan.attributes.amount)}
                </p>
              </div>
            </div>
          ))
        )}
        {/* )} */}
      </div>
    </Container>
  );
};

export default Search;
