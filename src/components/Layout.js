import React from "react";
import classes from "../styles/Layout.module.css";
import NavBrand from "./NavBrand";

export default function Layout({ children }) {
  return (
    <>
      <NavBrand />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
