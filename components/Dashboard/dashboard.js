import React, { useContext, useState, useEffect } from "react";
import { Container } from "./style";
import AuthContext from "@/context/AuthContext";
import { RiFocus2Fill, RiFocus2Line, RiFileReduceLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import userImage from "@/public/userImage.png";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Dashboard = ({ loans, customers }) => {
  const { user } = useContext(AuthContext);

  console.log("Loans", loans);
  console.log("Customers", customers);

  useEffect(() => {
    if (user) {
      user.loanees.map((e) => {
        console.log(e);
      });
      console.log(user.loanees);
    }
  }, []);

  // var a = moment([2007, 0, 29]);
  // var b = moment([2007, 0, 28]);
  // console.log(a.diff(b, "days"));

  return (
    <Container>
      <h1>Dashboard</h1>
      <div className="all">
        <div className="container">
          <div className="top_cards">
            <div className="card">
              <div className="texts">
                <p>Total Loans</p>
                {/* {user && user.loanees.length !== 0 && (
                  <h1>{user.loanees.length}</h1>
                )} */}
              </div>
              <RiFocus2Fill fontSize={30} />
            </div>
            <div className="card">
              <div className="texts">
                <p>Total Customers</p>
                {/* {user && user.loanees.length !== 0 && (
                  <h1>{user.loanees.length}</h1>
                )} */}
              </div>
              <RiFocus2Line fontSize={30} />
            </div>
            {/* <div className="card">
            <div className="texts">
              <p>Total Loans</p>
              {user && <h1>{user.loanees.length}</h1>}
            </div>
            <RiUserReceived2Line />
          </div> */}
          </div>
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
        <div className="wrapper">
          <div className="actions">
            <div className="btn">
              <button>
                <Link href="/create_user/loan_info">
                  <a>
                    Create User <FaPlus fontSize={16} />
                  </a>
                </Link>
              </button>
            </div>
            <div className="account">
              <div className="item">
                <RiFileReduceLine fontSize={20} /> New Loan
              </div>
              <div className="item">
                <RiFileReduceLine fontSize={20} /> Update User Information
              </div>
            </div>
          </div>
          <div className="recent">
            <h2>Recent Customers</h2>
            {user &&
              user.loanees.map((e) => (
                <div className="recent_customers" key={e.id}>
                  {e.image ? (
                    <Image
                      src={e.image.url}
                      width={50}
                      height={50}
                      alt="user image"
                    />
                  ) : (
                    <Image
                      src={userImage}
                      width={50}
                      height={50}
                      alt="user image"
                    />
                  )}
                  <div className="details">
                    <h3>{e.fullname}</h3>
                    {/* {e.disbursed && <p className="loaned">Loaned</p>}
                    {e.Paid && <p className="paid">Paid</p>}
                    {e.dues_soon && <p className="due_soon">Loan Due Soon</p>}
                    {e.due && <p className="overdue">Loan Overdue</p>}
                    {e.processing && <p className="processing">Processing</p>} */}
                    <p>{e.status}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
