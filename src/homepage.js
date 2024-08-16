import React from "react";
import Cookies from "js-cookie";

export default function Homepage({ user, setUser }) {
  const { username, password } = user || {};
  return (
    <div className="container">
      Welcome to the homepage!
      Your username is {username} and your password is {password}.
      <p>
        If you'd like to reset your username and password, click the button.
        <div className="button-container">
          <button
            onClick={() => {
              Cookies.remove("username");
              Cookies.remove("password");
              setUser({});
            }}
          >
            Reset
          </button>
        </div>
      </p>
    </div>
  );
}
