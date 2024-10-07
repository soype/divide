import React from "react";
import Link from "next/link";

import styles from "./MenuOption.module.scss";

const MenuOption = ({ name, link, isLogged }) => {
  return (
    <>
      {isLogged && (
        <li className={styles.menuOption}>
          <Link href={link}>{name}</Link>
        </li>
      )}
    </>
  );
};

export default MenuOption;
