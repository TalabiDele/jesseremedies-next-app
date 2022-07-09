import { createContext, useState, useEffect } from "react";
import { NEXT_PUBLIC_URL, API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import useLocalStorage from "@/components/hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useLocalStorage("firstname", "");
  const [lastName, setLastName] = useLocalStorage("lastname", "");
  const [address, setAddress] = useLocalStorage("address", "");
  const [state, setState] = useLocalStorage("state", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [dob, setDob] = useLocalStorage("dob", null);
  const [phoneNumber, setPhoneNumber] = useLocalStorage("phone_number", null);
  const [reference, setReference] = useLocalStorage("reference", "");
  const [referenceNumber, setReferenceNumber] = useLocalStorage(
    "reference_number",
    null
  );
  const [loanAmount, setLoanAmount] = useLocalStorage("loanAmount", "");
  const [duration, setDuration] = useLocalStorage("duration", "");
  const [interest, setInterest] = useLocalStorage("interest", "");
  const [loanPurpose, setLoanPurpose] = useLocalStorage("loanPurpose", "");
  const [employmentStatus, setEmploymentStatus] = useLocalStorage(
    "employment_status",
    ""
  );
  const [employer, setEmployer] = useLocalStorage("employer", "");
  const [dateStarted, setDateStarted] = useLocalStorage("date_started", "");
  const [workEmail, setWorkEmail] = useLocalStorage("workEmail", "");
  const [workNumber, setWorkNumber] = useLocalStorage("work_number", null);
  const [income, setIncome] = useLocalStorage("income", null);
  const [asset, setAsset] = useLocalStorage("asset", "");
  const [assetType, setAssetType] = useLocalStorage("asset_type", "");
  const [assetValue, setAssetValue] = useLocalStorage("asset_value", null);
  const [cardNumber, setCardNumber] = useLocalStorage("card_number", null);
  const [cvv, setCvv] = useLocalStorage("cvv", null);
  const [cardExpiry, setCardExpiry] = useLocalStorage("card_expiry", null);
  const [monthlyPayment, setMonthlyPayment] = useLocalStorage(
    "monthly_payment",
    null
  );
  const [officeId, setOfficeId] = useLocalStorage("office_id", null);
  const [passport, setPassport] = useLocalStorage("passport", null);
  const [id, setId] = useLocalStorage("id", null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
    router.prefetch("/feeds");
  }, []);

  // Register
  const register = async (user) => {
    setIsLoading(true);
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      setEmailError(res);

      setTimeout(() => {
        setEmailError(false);
      }, 5000);
    }

    const data = await res.json();

    setUserData(data);

    if (res.ok) {
      setIsLoading(true);
      setUser(data.user);
      setSent(true);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        router.push("/feeds");
      }, 10000);
      setEmailMessage("Check email for confirmation!");
      setIsLoading(false);
    } else {
      console.log("not working");
      setEmailError(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmailError(false);
      }, 1000);
    }
  };

  const forgotPassword = async ({ email }) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    // console.log(data);
    // setUserData(data);

    if (res.ok) {
      setUser(data.user.user);
      // router.push("/feeds");
    } else {
      setErrorMessage(data.message);
      setError(true);
    }
  };

  // Login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    // console.log(data);
    // setUserData(data);

    if (res.ok) {
      setUser(data.user.user);
      // setUserData(data);
      router.push("/dashboard");
    } else {
      setErrorMessage(data.message);
      setError(true);
    }
  };

  // Logout
  const logout = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/login");
    }
  };

  // Check user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        checkUserLoggedIn,
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
        referenceNumber,
        setReferenceNumber,
        dob,
        setDob,
        phoneNumber,
        setPhoneNumber,
        loanAmount,
        setLoanAmount,
        duration,
        setDuration,
        interest,
        setInterest,
        loanPurpose,
        setLoanPurpose,
        monthlyPayment,
        setMonthlyPayment,
        employmentStatus,
        setEmploymentStatus,
        employer,
        setEmployer,
        dateStarted,
        setDateStarted,
        workEmail,
        setWorkEmail,
        workNumber,
        setWorkNumber,
        income,
        setIncome,
        asset,
        setAsset,
        assetType,
        setAssetType,
        assetValue,
        setAssetValue,
        cardNumber,
        setCardNumber,
        cvv,
        setCvv,
        cardExpiry,
        setCardExpiry,
        passport,
        setPassport,
        id,
        setId,
        officeId,
        setOfficeId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// export async function getServerSideProps() {

//   return {
//     props: {
//       allUsers,
//     },
//   };
// }
