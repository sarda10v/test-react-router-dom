import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Главная</Link>
      <Link to="/news">Новости</Link>
    </div>
  );
};

export default Header;
