import React, { useContext, useState, useEffect } from "react";
import { Container } from "./Style";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import image from "@/public/userImage.png";
import { TbCurrencyNaira } from "react-icons/tb";

const Customer = ({ customers }) => {
  const { user } = useContext(AuthContext);
  const [totalInterest, setTotalInterest] = useState();

  console.log(customers);

  const locale = 5000000;

  const addCommas = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {}, []);

  const getTotal = (e) => {
    console.log(e.attributes.amount);
    console.log();

    return;
  };

  return (
    <Container>
      {customers.map((e) => (
        <div className="container" key={e.id}>
          <div className="personal">
            <div className="img">
              {e.attributes.passport.data ? (
                <Image
                  src={e.attributes.passport.data.attributes.url}
                  width={200}
                  height={200}
                  alt="Profile image"
                  className="image"
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt="Profile image"
                  className="image"
                />
              )}
            </div>
            <div className="details">
              <h2>{e.attributes.firstname + " " + e.attributes.lastname}</h2>
              <p>{e.attributes.address}</p>
              <p>{e.attributes.state}</p>
              <p>{e.attributes.phone_1}</p>
              <p>{e.attributes.email}</p>
              <p>{e.attributes.dob}</p>
            </div>
          </div>
          <div className="customer_personal">
            <div className="flex">
              <div className="loan_wrapper">
                <h3>Loans</h3>
                {e.attributes.loans.data.map((loan) => (
                  <div className="loan_container" key={loan.id}>
                    <p>
                      <span>Loan Amount: </span>
                      <TbCurrencyNaira />
                      {addCommas(loan.attributes.amount)}
                    </p>
                    <p>
                      <span>Interest: </span>
                      {loan.attributes.interest}% (
                      <TbCurrencyNaira />
                      {addCommas(
                        (loan.attributes.amount / 100) *
                          loan.attributes.interest
                      )}
                      ) monthly
                    </p>
                    <p>
                      <span>Duration of Loan: </span>
                      {loan.attributes.duration} months
                    </p>
                    <p>
                      <span>Monthly Payment: </span>
                      <TbCurrencyNaira />
                      {addCommas(loan.attributes.monthly_payment)}
                    </p>
                    <p>
                      <span>Purpose of Loan: </span>
                      {loan.attributes.purpose}
                    </p>
                    {loan.attributes.disbursed && (
                      <p>
                        Loan Status:{" "}
                        <span className="loaned btn">Disbursed</span>
                      </p>
                    )}
                    {loan.attributes.paid && (
                      <p>
                        Loan Status: <span className="paid btn">Paid</span>
                      </p>
                    )}
                    {loan.attributes.due_soon && (
                      <p>
                        Loan Status:
                        <span className="due_soon btn">Loan Due Soon</span>
                      </p>
                    )}
                    {loan.attributes.overdue && (
                      <p>
                        Loan Status:
                        <span className="overdue btn">Loan Overdue</span>
                      </p>
                    )}
                    {loan.attributes.processing && (
                      <p>
                        Loan Status:
                        <span className="processing btn">Processing</span>
                      </p>
                    )}
                    {loan.attributes.denied && (
                      <p>
                        Loan Status:
                        <span className="overdue btn">Denied</span>
                      </p>
                    )}
                    <p>
                      <span>Total: </span>
                      <TbCurrencyNaira />
                      {addCommas(
                        (loan.attributes.amount / 100) *
                          loan.attributes.interest *
                          loan.attributes.duration +
                          parseInt(loan.attributes.amount)
                      )}
                    </p>

                    {user && user.manager && loan.attributes.processing && (
                      <div className="btns">
                        <button>Approve</button>
                        <button>Decline</button>
                      </div>
                    )}
                    {user && user.md && loan.attributes.approved && (
                      <div className="btns">
                        <button>Disburse</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="financial_wrapper">
                <h3>Financial Information</h3>
                <div className="financial">
                  <div className="finance">
                    <p>
                      Current Employment Status:{" "}
                      <span>{e.attributes.employment_status}</span>
                    </p>
                    <p>
                      Current Employer: <span>{e.attributes.employer}</span>
                    </p>
                    <p>
                      Date Started: <span>{e.attributes.date_started}</span>
                    </p>
                    <p>
                      Work Contact Info (Email):{" "}
                      <span>{e.attributes.work_email}</span>
                    </p>
                    <p>
                      Work Phone Number: <span>{e.attributes.work_phone}</span>
                    </p>
                    <p>
                      Current Net Income:{" "}
                      <span>
                        <TbCurrencyNaira />
                        {addCommas(e.attributes.current_income)}
                      </span>
                    </p>
                    <p>
                      Asset: <span>{e.attributes.asset}</span>
                    </p>
                    <p>
                      Asset Type: <span>{e.attributes.asset_type}</span>
                    </p>
                    <p>
                      Value in Naira:{" "}
                      <span>
                        <TbCurrencyNaira />
                        {addCommas(e.attributes.value_of_asset)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="documents">
              <h3>Documents</h3>
              {e.attributes.cac.data && (
                <Image
                  src={e.attributes.cac.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
              {e.attributes.identification.data && (
                <Image
                  src={e.attributes.identification.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
              {e.attributes.memo.data && (
                <Image
                  src={e.attributes.memo.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
              {e.attributes.office_id.data && (
                <Image
                  src={e.attributes.office_id.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
              {e.attributes.payslip.data && (
                <Image
                  src={e.attributes.payslip.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
              {e.attributes.utility.data && (
                <Image
                  src={e.attributes.utility.data.attributes.url}
                  width={100}
                  height={100}
                  alt="documents"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Customer;
