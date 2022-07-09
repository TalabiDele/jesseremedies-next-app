import React, { useState, useContext } from "react";
import { Container } from "./style";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

const PersonalInfo = ({
  loanInfo,
  setLoanInfo,
  personalInfo,
  setPersonalInfo,
  financialInfo,
  setFinancialInfo,
  review,
  setReview,
}) => {
  const [passportName, setPassportName] = useLocalStorage("passport_name", "");
  const [idName, setIdName] = useLocalStorage("id_name", "");
  const [officeIdName, setOfficeIdName] = useLocalStorage("office_id_name", "");

  const router = useRouter();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    state,
    setState,
    email,
    setEmail,
    reference,
    setReference,
    dob,
    setDob,
    phoneNumber,
    setPhoneNumber,
    referenceNumber,
    setReferenceNumber,
    id,
    setId,
    passport,
    setPassport,
    officeId,
    setOfficeId,
  } = useContext(AuthContext);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      if (file) {
        fileReader.readAsDataURL(file);
        // reader.readAsDataURL(event.target.files[0]);
      }
    });
  };

  const handlePassportChange = async (e) => {
    // setPassport(e.target.files[0]);

    const selectedPassport = await convertBase64(e.target.files[0]);

    setPassport(selectedPassport);

    setPassportName(e.target.files[0].name);

    console.log(passport);
  };

  const handleIdChange = async (e) => {
    // setPassport(e.target.files[0]);

    const selectedFile = await convertBase64(e.target.files[0]);

    setId(selectedFile);

    setIdName(e.target.files[0].name);

    console.log(e.target.files[0].name);
  };

  const handleOfficeId = async (e) => {
    // setPassport(e.target.files[0]);

    const selectedFile = await convertBase64(e.target.files[0]);

    setOfficeId(selectedFile);

    setOfficeIdName(e.target.files[0].name);

    console.log(officeId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPersonalInfo(false);
    setFinancialInfo(true);

    router.push("/create_user/financial_info");
  };

  const uploadPassport = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("File uploading...");

    const formData = new FormData();
    formData.append("files", passport);
    // formData.append("ref", "user");
    formData.append("refId", e.id);
    formData.append("field", "user_image");

    const resUpload = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await resUpload.json();

    if (resUpload.ok) {
      imageUploaded(data);
      setMessage("File uploaded successfully! Save Chages.");
      setTimeout(() => {
        setMessage();
      }, 7000);
    } else {
      setMessage("Select a file");
      setTimeout(() => {
        setMessage();
      }, 7000);
    }

    setIsLoading(false);

    setUserProfileImage(data);

    console.log(userProfileImage);
  };

  return (
    <Container>
      <div className="container">
        <h1>Personal Information</h1>
        <form action="" onSubmit={handleSubmit}>
          {/* <div className="no_flex"> */}
          <div className="flex_three">
            <div className="no_flex">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="Bayo"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="no_flex">
              <label htmlFor="Lastname">Last Name</label>
              <input
                type="text"
                placeholder="Ojo"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="no_flex">
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="address">Current Address</label>
              <input
                type="text"
                placeholder="2, abc street, defg"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="no_flex">
              <label htmlFor="state">Residential State</label>
              <input
                type="text"
                placeholder="Lagos"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="johdoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="no_flex">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                placeholder="081*********"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="reference">Reference Full Name</label>
              <input
                type="text"
                placeholder="Rufus Giwa"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>
            <div className="no_flex">
              <label htmlFor="ref_number">Reference Phone Number</label>
              <input
                type="number"
                placeholder="081*********"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="passport">Upload Passport Photograph</label>
              <input type="file" onChange={(e) => handlePassportChange(e)} />
            </div>
            <div className="no_flex">
              <label htmlFor="id">Upload Means of Identification</label>
              <input type="file" onChange={(e) => handleIdChange(e)} />
            </div>
          </div>

          <div className="flex_two">
            <div className="no_flex">
              <label htmlFor="office_id">Upload Office ID</label>
              <input type="file" onChange={(e) => handleOfficeId(e)} />
            </div>
          </div>

          {/* </div> */}
          <div className="btns">
            <button className="cancel">Cancel</button>
            <button type="submit" className="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default PersonalInfo;
