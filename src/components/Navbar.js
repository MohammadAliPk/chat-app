import React from "react";

// Styles
import styles from "./Navbar.module.css";

const Navbar = ({ LogoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>BotoGram</div>
      <div className={styles.logout} onClick={LogoutHandler}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
