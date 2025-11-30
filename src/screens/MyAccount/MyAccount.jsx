import React from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import GuideCenter from './GuideCenter'
const MyAccount = () => {
  return (
    <section className="bg-custom">
      <HeaderLayout />
      <div className="container hidden py-8 md:block">
        <GuideCenter />
      </div>
      <div className="py-8 md:hidden">
        <GuideCenter />
      </div>
    </section>
  );
};

export default MyAccount;
