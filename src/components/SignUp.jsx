import React, { useRef, useState } from "react";
import "./SignUp.css";
import { checkValidEmail } from "../utils/validate";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);

  const handleButtonSubmit = () => {
    setErrorMessage(null);
    const message = checkValidEmail(email.current.value);
    if (!email.current.value || message) {
      setErrorMessage(message || "Please enter a valid email address.");
      return;
    }
    window.location.href = "https://app.loch.one/welcome";
  };
  return (
    <section className='signup'>
      <div className='form-container'>
        <h2 className='form-heading'>Sign up for exclusive access.</h2>
        <div className='form-body'>
          <input
            ref={email}
            type='email'
            placeholder='Your email address'
            className='form-input'
          />

          <button className='form-btn' onClick={handleButtonSubmit}>
            Get started
          </button>
        </div>
        <p className={errorMessage ? "form-message alert" : "form-message"}>
          {errorMessage
            ? errorMessage
            : "You’ll receive an email with an invite link to join."}
        </p>
      </div>
    </section>
  );
};

export default SignUp;
