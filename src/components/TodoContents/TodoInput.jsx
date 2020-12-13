import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions";

import styles from './TodoInput.module.css'

function TodoInput() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    const body = {title, desc, status: 0};
    e.preventDefault();
    dispatch(addNewTodo({body}));
    setDesc('');
    setTitle('');
  }



  return (
    <div className={styles.container}>
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
