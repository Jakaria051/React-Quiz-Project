import React from "react";
import classes from "../styles/Nav.module.css";

export default function NavAccount() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
