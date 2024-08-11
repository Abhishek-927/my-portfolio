import React from "react";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container mx-auto row align-items-center">
        <div className="col-md-6">
          Copyright &copy; 2024. All Rights Reserved
        </div>
        <div className="col-md-6 text-center text-sm-end">
          <div className="social-icon">
            <a href="#">
              <img src={navIcon1} alt="Icon" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="Icon" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
