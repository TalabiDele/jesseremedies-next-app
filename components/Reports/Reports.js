import React, { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { Container } from "./Style";
import { TbCurrencyNaira } from "react-icons/tb";

const Reports = ({ token, users, customers, loans }) => {
  const { user, addCommas } = useContext(AuthContext);

  console.log("users", users);
  console.log("customers", customers);
  console.log("loans", loans);

  useEffect(() => {
    // getSum();
  }, []);

  const getSum = (c) => {
    //   console.log(
    //     cust.attributes.loans.data.reduce(
    //       (n, { attributes }) => n + +parseInt(attributes.amount),
    //       0
    //     )
    //   );

    loans.data.reduce(function (prev, current) {
      //   console.log(
      //     current.attributes.customer.data !== null &&
      //       current.attributes.customer.data.id === c.id
      //   );
      //   if (
      //     current.attributes.customer.data !== null &&
      //     current.attributes.customer.data.id === c.id
      //   ) {
      return prev + +current.attributes.amount;
      // console.log(prev + +parseInt(current.attributes.amount));
      //   console.log(prev + +parseInt(current.attributes.amount));
      //   }
    }, 0);
    // console.log(sum);

    return <p>{sum}</p>;

    // const sum = loans.data.reduce((prev, current) => {
    //   return prev + +parseInt(current.attributes.amount);
    //   //   console.log(current.attributes.loans.data.attributes);
    // });

    // console.log(sum);
  };

  let ans = 0;

  return (
    <Container>
      <div className="container">
        <h1>Reports</h1>
        <div className="user_report">
          {user &&
            user.manager &&
            users.map(
              (e) =>
                e.teller && (
                  <div className="user_container">
                    <h3>{e.username}</h3>
                    {customers.data.map(
                      (cust) =>
                        cust.attributes.user.data.id === e.id && (
                          <div
                            className="loan_reports"
                            key={cust.attributes.id}
                          >
                            <div className="total_loaned">
                              {/* <h3>Total Amount Loaned</h3> */}
                              {/* {console.log(cust.attributes.loans.data)} */}
                              {/* {loans.data.map} */}
                              <p>
                                {loans.data.map(
                                  (cur) =>
                                    cur.attributes.customers &&
                                    cur.attributes.customers.data.id ===
                                      cust.id && <p>{getSum(cust)}</p>
                                )}
                              </p>
                            </div>
                          </div>
                        )
                    )}
                    <div className="orders">
                      <div className="search">
                        <div className="input">
                          <label htmlFor="search">Search</label>
                          <input type="text" placeholder="Search User" />
                        </div>
                        <ul>
                          <li>All</li>
                          <li>Loaned</li>
                          <li>Overdue</li>
                          <li>Paid</li>
                          <li>Processing</li>
                        </ul>
                      </div>
                      <div className="table">
                        <ul>
                          <li>Loan Id</li>
                          <li>Customer</li>
                          <li>Loan Status</li>
                          <li>Total</li>
                        </ul>
                        <div className="loanee_details">
                          {customers.data.map(
                            (customer) =>
                              customer.attributes.user.data.id === e.id &&
                              customer.attributes.loans.data.map((loan) => (
                                <div className="loan" key={loan.attributes.id}>
                                  <p className="id">
                                    {loan.attributes.loan_id}
                                  </p>
                                  <p className="name">
                                    {customer.attributes.firstname +
                                      " " +
                                      customer.attributes.lastname}
                                  </p>
                                  {loan.attributes.disbursed && (
                                    <p className="loaned btn">Disbursed</p>
                                  )}
                                  {loan.attributes.paid && (
                                    <p className="paid btn">Paid</p>
                                  )}
                                  {loan.attributes.approved && (
                                    <p className="paid btn">Approved</p>
                                  )}
                                  {loan.attributes.due_soon && (
                                    <p className="due_soon btn">
                                      Loan Due Soon
                                    </p>
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
                                    <TbCurrencyNaira
                                      fontSize={20}
                                      color="#1F4173"
                                    />
                                    {addCommas(loan.attributes.amount)}
                                  </p>
                                </div>
                              ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </Container>
  );
};

export default Reports;
