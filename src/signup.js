import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useForm, useField } from "react-final-form-hooks";

export default function SignUp({ setUser }) {
  const { form, handleSubmit } = useForm({
    onSubmit: (values) => {
      Cookies.set("username", values.username);
      Cookies.set("password", values.password);
      setUser(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "This field is required";
      }
      if (!values.password) {
        errors.password = "This field is required";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
      }
      return errors;
    },
  });

  const usernameField = useField("username", form);
  const passwordField = useField("password", form);
  const confirmPasswordField = useField("confirmPassword", form);

  return (
    <div className="container">
      <h1 className="header">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input {...usernameField.input} className="input" />
          {usernameField.meta.error && usernameField.meta.touched && (
            <span className="error">{usernameField.meta.error}</span>
          )}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" {...passwordField.input} className="input" />
          {passwordField.meta.error && passwordField.meta.touched && (
            <span className="error">{passwordField.meta.error}</span>
          )}
        </div>
        <div className="input-container">
          <label>Confirm password</label>
          <input type="password" {...confirmPasswordField.input} className="input" />
          {confirmPasswordField.meta.error && confirmPasswordField.meta.touched && (
            <span className="error">{confirmPasswordField.meta.error}</span>
          )}
        </div>
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
