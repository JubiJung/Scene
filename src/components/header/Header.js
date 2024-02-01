import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const movePage = useNavigate();
  const goHome = () => {
    movePage("/");
  };
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo} onClick={goHome}>
          Scene
        </h1>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
