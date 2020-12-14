import React from "react";
import styles from './Alert.module.css'

const Alert = ({isShowAlert, showAlert}) =>{
  if (isShowAlert) {
    return (
      <div className={styles.container} onClick={() => showAlert()}>
        <p style={{color:"white"}}>Plese fill all inputs! To close warning, click this.</p>
      </div>
    );
  }else{
    return (
        <div></div>
      );
  }
}

export default Alert;
