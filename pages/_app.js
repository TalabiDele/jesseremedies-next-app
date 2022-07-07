import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
