import React, { useContext } from "react";
import { Container } from "./Style";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import image from "@/public/userImage.png";

const Customer = ({ customers }) => {
  const { user } = useContext(AuthContext);

  console.log(customers);

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
            <div className="customer_personal">
              <h2>{e.attributes.firstname + " " + e.attributes.lastname}</h2>
              <p>{e.attributes.address}</p>
              <p>{e.attributes.state}</p>
              <p>{e.attributes.phone_1}</p>
              {user && user.manager && e.attributes.processing && (
                <div className="btns">
                  <button>Approve</button>
                  <button>Decline</button>
                </div>
              )}
              {user && user.md && e.attributes.approved && (
                <div className="btns">
                  <button>Disburse</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Customer;
