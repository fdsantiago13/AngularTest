import React, { useState } from "react";
import Navbar from "../components/Header/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import AboutUs from "../components/AboutUs/about";
import Appointment from "../components/Appoinment/appointment";
import Service from "../components/Services/services";
import Dentist from "../components/Dentist/dentist";
import Footer from "../components/Footer/footer";
import HowTo from "../components/HowTo/howto";
import { steps } from "../components/HowTo/howtocontent";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Navbar onToggle={onToggle} />
      <Appointment />
      <Service />
      <AboutUs />
      <Dentist />
      <HowTo {...steps} />
      <Footer />
    </>
  );
};

export default Main;
