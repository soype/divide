import React from "react";

import styles from "./Navbar.module.scss";
import MenuOption from "./MenuOption/MenuOption";

const Navbar = () => {
  const MenuOptions = [
    {
      name: "Login",
      link: "/login",
      isLogged: false,
    },
    {
      name: "Sign Up",
      link: "/signup",
      isLogged: false,
    },
    {
      name: "About",
      link: "/about",
      isLogged: null,
    },
    {
      name: "My Account",
      link: "/my-account",
      isLogged: true,
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__container"]}>
        <div className={styles.logo}>
          <h1>Divide</h1>
        </div>
        <div className={styles.menu}>
          <div className={styles['menu__burger']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles['menu__list']}>
          {MenuOptions.map((option, index) => (
            <MenuOption key={index} name={option.name} link={option.link} isLogged={option.isLogged} />
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
