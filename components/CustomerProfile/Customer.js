import React, { useContext, useState, useEffect } from "react";
import { Container, Wrapper } from "./Style";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import image from "@/public/userImage.png";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { API_URL } from "@/config/index";

const Customer = ({ customers, token }) => {
  const [isImage, setIsImage] = useState(false);
  const [isCac, setIsCac] = useState(false);
  const [isIdentification, setIsIdentification] = useState(false);
  const [isMemo, setIsMemo] = useState(false);
  const [isOfficeId, setIsOfficeId] = useState(false);
  const [isPayslip, setIsPayslip] = useState(false);
  const [isUtility, setIsUtility] = useState(false);

  const { user, addCommas } = useContext(AuthContext);

  console.log(customers);

  const handleApprove = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          processing: false,
          approved: true,
          // customer: {
          //   id: e.data.id,
          // },
        },
      }),
    });

    const data = loanRes.json();

    console.log(data);
  };

  const handleDecline = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          processing: false,
          denied: true,
          // customer: {
          //   id: e.data.id,
          // },
        },
      }),
    });

    const data = loanRes.json();

    console.log(data);
  };

  const handleDisburse = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          processing: false,
          denied: false,
          approved: false,
          disbursed: true,
          // customer: {
          //   id: e.data.id,
          // },
        },
      }),
    });

    const data = loanRes.json();

    console.log(data);
  };

  const handleStart = async (e) => {
    const loanRes = await fetch(`${API_URL}/loans/${e.id}?populate=*`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          processing: false,
          denied: false,
          approved: false,
          disbursed: false,
          loan_start: true,
          // customer: {
          //   id: e.data.id,
          // },
        },
      }),
    });

    const data = loanRes.json();

    console.log(data);
  };

  const displayDocument = (e) => {
    setIsImage(true);
  };

  const removeDocument = () => {
    setIsImage(false);
  };

  return (
    <>
      <Container>
        {/* <Wrapper>
        <div className="image">
          <Image src={} />
        </div>
      </Wrapper> */}
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
                        {console.log(loan)}
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
                      {loan.attributes.approved && (
                        <p>
                          Loan Status:{" "}
                          <span className="paid btn">Approved</span>
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
                      {loan.attributes.loan_start && (
                        <p>
                          Loan Status:
                          <span className="start btn">Loaned</span>
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
                          <button
                            className="approve"
                            onClick={() => handleApprove(loan)}
                          >
                            Approve
                          </button>
                          <button
                            className="decline"
                            onClick={() => handleDecline(loan)}
                          >
                            Decline
                          </button>
                        </div>
                      )}
                      {user && user.md && loan.attributes.approved && (
                        <div className="btns">
                          <button
                            className="approve"
                            onClick={() => handleDisburse(loan)}
                          >
                            Disburse
                          </button>
                        </div>
                      )}
                      {user && user.manager && loan.attributes.disbursed && (
                        <div className="btns">
                          <button
                            className="start"
                            onClick={() => handleStart(loan)}
                          >
                            Start Loan
                          </button>
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
                        Work Phone Number:{" "}
                        <span>{e.attributes.work_phone}</span>
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
                <div className="docs">
                  {e.attributes.cac.data && (
                    <>
                      <div className="image" onClick={displayDocument}>
                        <Image
                          src={e.attributes.cac.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>
                      {isImage && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={removeDocument}
                            />
                            <Image
                              src={e.attributes.cac.data.attributes.url}
                              width={e.attributes.cac.data.attributes.width}
                              height={e.attributes.cac.data.attributes.height}
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {e.attributes.identification.data && (
                    <>
                      <div
                        className="image"
                        onClick={() => setIsIdentification(true)}
                      >
                        <Image
                          src={e.attributes.identification.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>

                      {isIdentification && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={() => setIsIdentification(false)}
                            />
                            <Image
                              src={
                                e.attributes.identification.data.attributes.url
                              }
                              width={
                                e.attributes.identification.data.attributes
                                  .width
                              }
                              height={
                                e.attributes.identification.data.attributes
                                  .height
                              }
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {e.attributes.memo.data && (
                    <>
                      <div className="image" onClick={() => setIsMemo(true)}>
                        <Image
                          src={e.attributes.memo.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>
                      {isMemo && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={() => setIsMemo(false)}
                            />
                            <Image
                              src={e.attributes.memo.data.attributes.url}
                              width={e.attributes.memo.data.attributes.width}
                              height={e.attributes.memo.data.attributes.height}
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {e.attributes.office_id.data && (
                    <>
                      <div
                        className="image"
                        onClick={() => setIsOfficeId(true)}
                      >
                        <Image
                          src={e.attributes.office_id.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>

                      {isOfficeId && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={() => setIsOfficeId(false)}
                            />
                            <Image
                              src={e.attributes.office_id.data.attributes.url}
                              width={
                                e.attributes.office_id.data.attributes.width
                              }
                              height={
                                e.attributes.office_id.data.attributes.height
                              }
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {e.attributes.payslip.data && (
                    <>
                      <div className="image" onClick={() => setIsPayslip(true)}>
                        <Image
                          src={e.attributes.payslip.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>

                      {isPayslip && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={() => setIsPayslip(false)}
                            />
                            <Image
                              src={e.attributes.cac.data.attributes.url}
                              width={e.attributes.cac.data.attributes.width}
                              height={e.attributes.cac.data.attributes.height}
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {e.attributes.utility.data && (
                    <>
                      <div className="image" onClick={() => setIsUtility(true)}>
                        <Image
                          src={e.attributes.utility.data.attributes.url}
                          width={100}
                          height={100}
                          alt="documents"
                          objectFit="cover"
                          className="image"
                        />
                      </div>

                      {isUtility && (
                        <div className="modal">
                          <div className="image_modal">
                            <MdCancel
                              fontSize={40}
                              color="#2e7cf6"
                              className="cancel"
                              onClick={() => setIsUtility(false)}
                            />
                            <Image
                              src={e.attributes.cac.data.attributes.url}
                              width={e.attributes.cac.data.attributes.width}
                              height={e.attributes.cac.data.attributes.height}
                              alt="documents"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Customer;
