import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { visibleModal } from "../../redux/actions";
import styles from "./Modal.module.css";
import moment from 'moment';

function Modal() {
  let visible = useSelector((state) => state);
  let dispatch = useDispatch();

  function convertTime() {
    return moment(visible.selectedObject.createdAt).utc().format('DD-MM-YYYY / HH:mm:ss');
  }

  if (visible.isVisibleModal === true) {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <span
            className={styles.close}
            onClick={() => dispatch(visibleModal(false))}
            aria-hidden="true"
          >
            &times;
          </span>
          <h3>{visible.selectedObject.title}</h3>
          <h4 className={styles.desc}>• {visible.selectedObject.desc}</h4>
          <h5 className={styles.time}>{convertTime()}</h5>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Modal;

{
  /* <div className="modal-header">
<h5
    className="modal-title"
>{visible.selectedObject.title}</h5>
<button type="button" className="close" aria-label="Close" onClick={() => dispatch(visibleModal(false))}>
    <span aria-hidden="true">&times;</span>
</button>
</div>
<div className={}>
<p style={{backgroundColor: "white"}}>{visible.selectedObject.desc}</p>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" onClick={() => dispatch(visibleModal(false))}>close</button>
</div> */
}
