import React, { useState } from "react";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import spinner from "../../../assets/Gif/Rolling-1s-62px.svg";
import "./ContactForm.scss";

const ContactForm = () => {
  const [successAlert, setSuccessAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [loadingAlert, setLoadingAlert] = useState(false);

  const onSubmit = (e) => {
    setLoadingAlert(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then((result) => {
        console.log(result.text);
        setSuccessAlert("Success");
        setLoadingAlert(false);
      })
      .then(() => {
        setTimeout(() => {
          setSuccessAlert("");
        }, 4000);
      })

      .catch((error) => {
        setErrorAlert("Error");
        setLoadingAlert(false);
        setTimeout(() => {
          setErrorAlert("");
        }, 4000);
      });

    e.target.reset();
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Pole imię nie może być puste")
      .trim()
      .min(2, "Imię i nazwisko jest za krótkie"),
    email: Yup.string()
      .required("Pole email nie może być puste")
      .email("Email musi być poprawny"),

    subject: Yup.string().required("Pole nie może być puste"),

    message: Yup.string()
      .required("Pole wiadomości nie moze być puste")
      .min(10, "Za krótka wiadomość"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }, e) => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form className="contact-form" onSubmit={sendEmail}>
          <h1 className="contact-form__title">Skontaktuj się z nami</h1>
          <Field
            className="contact-form__input"
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <div className="contact-form__error">
            <ErrorMessage name="name" className="contact-form__error" />
          </div>
          <Field
            className="contact-form__input"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className="contact-form__error">
            <ErrorMessage name="email" className="contact-form__error" />
          </div>
          <Field
            className="contact-form__input"
            type="text"
            name="subject"
            placeholder="Temat"
            id="subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            autoComplete="off"
          />
          <div className="contact-form__error">
            <ErrorMessage name="subject" />
          </div>
          <Field
            className="contact-form__input contact-form__textarea"
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            as="textarea"
            placeholder="Treść wiadomości..."
          />
          <div className="contact-form__error">
            <ErrorMessage name="message" />
          </div>
          <button
            className="contact-form__button"
            type="submit"
            disabled={isSubmitting}
            onClick={onSubmit}
          >
            {loadingAlert ? (
              <img
                src={spinner}
                alt="contactSpinner"
                className="contact-form__gif"
              />
            ) : (
              "Wyślij"
            )}
          </button>
          {successAlert === "Success" ? (
            <p className="contact-form__alert">Wiadomość została wysłana</p>
          ) : null}
          {errorAlert === "Error" ? (
            <p className="contact-form__alert-error">
              Wystąpił błąd i wiadomość nie mogła zostałać wysłana
            </p>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
