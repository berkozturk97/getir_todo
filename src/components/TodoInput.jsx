import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

function TodoInput() {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Todo Input</h3>
      <div className="row m-2">
        <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text" className="form-control" />
        <button
         onClick={() =>{

          dispatch(addTodo(
           {
             id: Math.floor(Math.random() * 100) + 10,
             name: name
           }
         ))
         setName('');
        }}
         className="btn btn-primary m-2">Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
