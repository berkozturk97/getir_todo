import React from "react";

import styles from './Loading.module.css';

import logo from "../../assets/svg/ripple.svg";

function Loading() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Getir Loading SVG" />
    </div>
  );
}

export default Loading;
