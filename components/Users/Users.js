import React, { useState, useContext } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Container } from "./style";
import AuthContext from "@/context/AuthContext";

const UsersPage = ({ customers }) => {
  const { user } = useContext(AuthContext);

  console.log(customers);

  return (
    <Container>
      <h1>Users</h1>
      <div className="all">
        <div className="container">
          <div className="orders">
            <h2>Latest Loan Orders</h2>
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
              {user &&
                customers.data.map(
                  (e) =>
                    user.id === e.attributes.user.data.id && (
                      <div className="loanee_details" key={e.id}>
                        {e.attributes.loans.data.map((loan) => (
                          <div className="loan" key={loan.id}>
                            <p className="id">{loan.attributes.loan_id}</p>
                            <p className="name">
                              {e.attributes.firstname +
                                " " +
                                e.attributes.lastname}
                            </p>
                            {console.log(loan.attributes)}
                            {loan.attributes.disbursed && (
                              <p className="loaned btn">Disbursed</p>
                            )}
                            {loan.attributes.paid && (
                              <p className="paid btn">Paid</p>
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
                            {loan.attributes.denied && (
                              <p className="overdue btn">Denied</p>
                            )}
                            <p className="total">
                              <TbCurrencyNaira fontSize={20} color="#1F4173" />
                              {loan.attributes.amount}
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UsersPage;
