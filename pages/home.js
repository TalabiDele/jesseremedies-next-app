import Landing from "@/components/Home/Landing";
import LandingLayout from "@/components/LandingLayout";
import React from "react";

const home = () => {
  return (
    <div>
      <LandingLayout>
        <Landing />
      </LandingLayout>
    </div>
  );
};

export default home;
