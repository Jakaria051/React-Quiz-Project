import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Nav.module.css";

export default function NavAccount() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
        </>
      )}
    </div>
  );
}
