import React from "react";
import Navbar from "./components/modules/Navbar";
import Hero from "./components/modules/Hero";
import About from "./components/modules/About";
import AwarenessEducation from "./components/modules/AwarenessEducation";
import Report from "./components/modules/Report";
import EmergencyHotline from "./components/modules/EmergencyHotline";
import FundingSupport from "./components/modules/FundingSupport";
import  LegalAid from "./components/modules/LegalAid";
import Donate from "./components/modules/Donate";
import AnonymousReporting from "./components/modules/AnonymousReporting";
import Volunteer from "./components/modules/Volunteer";
import Footer from "./components/modules/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AwarenessEducation />
      <Report />
      <EmergencyHotline />
      <FundingSupport />
      <LegalAid />
      <Donate />
      <AnonymousReporting />
      <Volunteer />
      <Footer />
    </>
  );
}

export default App;
