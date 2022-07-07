import { createContext, useState, useEffect } from "react";
import { NEXT_PUBLIC_URL, NEXT_PUBLIC_API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [reference, setReference] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [interest, setInterest] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employer, setEmployer] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [workNumber, setWorkNumber] = useState();
  const [income, setIncome] = useState();
  const [asset, setAsset] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assetValue, setAssetValue] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const [cardExpiry, setCardExpiry] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();

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
      setUserData(data);
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
      setUserData(data);
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

  // Get all users
  const getUsers = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
    const data = await res.json();

    if (res.ok) {
      setAllUsers(data.res);
    } else {
      setAllUsers(null);
    }
  };

  // Provider authentication
  const userProvider = async () => {
    setUser(session.user);
    console.log(user);
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
