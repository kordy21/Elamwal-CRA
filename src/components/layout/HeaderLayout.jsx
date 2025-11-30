import React from "react";
import { Header } from "./Header";
import { UserProfile } from "./UserProfile";
import { Navbar } from "./Navbar";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <Navbar />
    </>
  );
};

export default HeaderLayout;
