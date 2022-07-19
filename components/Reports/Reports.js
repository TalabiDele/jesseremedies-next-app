import React, { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { Container } from "./Style";
import { TbCurrencyNaira } from "react-icons/tb";

const Reports = ({ token, users, customers }) => {
  const { user } = useContext(AuthContext);

  console.log("users", users);
  console.log("customers", customers);

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
                                  {console.log(loan.attributes)}
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
                                    {loan.attributes.amount}
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
