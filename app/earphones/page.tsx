import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const EarphonesPage = () => {
  return (
    <>
      <header className="bg-[#0e0e0e] py-8 px-6">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
        </div>
      </header>
      <main>{/* Page content will go here */}</main>
      <Footer />
    </>
  );
};

export default EarphonesPage;
