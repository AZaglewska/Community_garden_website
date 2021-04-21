import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="contact__title">Kontakt</h1>
        <Link to={routes.home} className="contact__link">
          Powrót do strony głównej
        </Link>
        <div className="contact__components">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default Contact;
