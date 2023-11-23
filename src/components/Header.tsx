import styles from "./Header.module.css";

import toDoLogo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header} >
      <img src={toDoLogo} alt="logo-todo" />
    </header>
  );
};
