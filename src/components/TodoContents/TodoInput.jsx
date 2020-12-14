import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import Alert from "../Alert/Alert";

import styles from './TodoInput.module.css'

function TodoInput() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    setIsShowAlert(false)
    const body = {title, desc, status: 0};
    e.preventDefault();
    if(title.length === 0 || desc.length === 0){
      return setIsShowAlert(true)
    }
    dispatch(addNewTodo({body}));
    setDesc('');
    setTitle('');
  }

  return (
    <div className={styles.container}>
      <Alert isShowAlert={isShowAlert} showAlert={()=> setIsShowAlert(false)} />
      <h3 className={styles.title}>Add New Todo</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            value={title}
            type="text"
            className={styles.form}
          />
          <input
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            value={desc}
            type="text"
            className={styles.form}
          />
          <input
            className={styles.button}
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoInput;
