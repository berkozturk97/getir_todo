import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

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
    <div>
      <h3>Add New Todo</h3>
      <div className="row m-2 align-items-center">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            value={title}
            type="text"
            className="form-control"
          />
          <input
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            value={desc}
            type="text"
            className="form-control"
          />
          <input
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoInput;
