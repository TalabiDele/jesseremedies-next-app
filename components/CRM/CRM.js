import React, { useContext } from "react";
import { Container } from "./style";
import moment from "moment";
import AuthContext from "@/context/AuthContext";
import { TbCurrencyNaira } from "react-icons/tb";

const CRM = ({ crms }) => {
  const { addCommas } = useContext(AuthContext);

  console.log(crms);
  return (
    <Container>
      <div className="head">
        <h1>CRM</h1>
        <button>Add</button>
      </div>
      <div className="container">
        <ul>
          <li>Date</li>
          <li>Name</li>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Career</li>
          <li>Average Income</li>
          <li>Loan Request</li>
        </ul>
        {crms.data.map((e) => (
          <div className="wrapper" key={e.id}>
            {/* {console.log(moment(e.attributes.data).format())}
            {moment(e.attributes.data).format()} */}
            <p>{moment(e.attributes.data).format()}</p>
            <p>{e.attributes.name}</p>
            <p>{e.attributes.number}</p>
            <p>{e.attributes.email}</p>
            <p>{e.attributes.career}</p>
            <p>
              <TbCurrencyNaira />
              {addCommas(e.attributes.average_earning)}
            </p>
            <p>
              <TbCurrencyNaira />
              {addCommas(e.attributes.amount_requested)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CRM;
