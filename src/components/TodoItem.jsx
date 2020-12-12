import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";


function TodoItem({todo}) {

  const [editableTodo, setEditableTodo] = useState(false);
  const [newname, setNewName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
   
    <div>
      <div className="row mx-2 align-items-center">
      <div>#{todo.id}</div>
      </div>
    </div>
  );
}

export default TodoItem;
