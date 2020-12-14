import React from "react";
import moment from 'moment';

import { useDispatch, useSelector } from "react-redux";
import { removeTodo, visibleModal } from "../../redux/actions";
import { getTableNameByStatus } from "../../utils/functions/table";

import styles from "./Modal.module.css";

function Modal() {
  let visible = useSelector((state) => state);
  let dispatch = useDispatch();
  const { item, index } = visible.selectedObject;

  function convertTime() {
    return moment(item.createdAt).utc().format('DD-MM-YYYY / HH:mm:ss');
  }

  function deleteItem() {
      const body = {_id: item._id};

      let list = getTableNameByStatus(item.status);
      
      dispatch(removeTodo({body,list,deletedIndex: index}));
      dispatch(visibleModal(false));
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
          <h3>{item.title}</h3>
          <h4 className={styles.desc}><span style={{color: "#4F34A3"}}>•</span> {item.desc}</h4>
          <h5 className={styles.time}>{convertTime()}</h5>
          <i onClick={deleteItem} class="fas fa-trash-alt fa-2x"></i>
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
