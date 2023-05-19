import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Router from "next/router";
import { useRouter } from "next/router";
import LandingNav from "./Navbar/LandingNav";

// Router.onRouteChangeStart = (url) => {
//   NProgress.start();
// };

// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => {
//   setTimeout(() => {
//     NProgress.done();
//   }, 5000);
// };

export default function LandingLayout({
  title,
  keywords,
  description,
  children,
  router,
}) {
  const { user } = useContext(AuthContext);
  const isRouter = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <LandingNav />
      <div>{children}</div>
      {/* {isRouter.pathname === "/login" ||
      isRouter.pathname === "/forgot-password" ||
      isRouter.pathname === "/reset-password" ? (
        <></>
      ) : (
        <Footer />
      )} */}
    </div>
  );
}

LandingLayout.defaultProps = {
  title: "Jesse Remedies",
  description: "",
  keywords: "",
};
