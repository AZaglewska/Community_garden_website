import React from "react";
import addressIcon from "../../../assets/Icons/placeholder.svg";
import phoneIcon from "../../../assets/Icons/call.svg";
import emailIcon from "../../../assets/Icons/email.svg";
import sunIcon from "../../../assets/Images/ContactImages/sun.png";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info__container">
        <h1 className="contact-info__title">Polski Związek Działkowców</h1>
        <h2 className="contact-info__subtitle">
          Rodzinny Ogród Działkowy Warszawianka
        </h2>
        <div className="contact-info__elements">
          <div className="contact-info__wrapper">
            <img
              src={addressIcon}
              className="contact-info__icon"
              alt="placeholder"
            />
            <p className="contact-info__details">
              Piaseczyńska 60/66, 00-765 Warszawa
            </p>
          </div>
          <p className="contact-info__details bold-text">
            Telefon do biura zarządu:
            <span>sobota 11:00 - 13:00 (w godz. urzędowania) </span>
          </p>
          <div className="contact-info__wrapper">
            <img src={phoneIcon} className="contact-info__icon" alt="phone" />
            <p className="contact-info__details">797-954-990</p>
          </div>
          <div className="contact-info__wrapper">
            <img src={emailIcon} className="contact-info__icon" alt="email" />
            <p className="contact-info__details">rodwarszawianka@wp.pl</p>
          </div>
          <p className="contact-info__details bold-text">
            Konto Ogrodu:
            <span>
              <p>63 1090 1870 0000 1429 7475</p>
            </span>
          </p>
          <p className="contact-info__details bold-text">KRS: X</p>
          <p className="contact-info__details bold-text">NIP:X</p>
        </div>
        <div className="contact-info__image">
          <img src={sunIcon} alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
