import React, { useState } from "react";

function Modal() {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const handleSubmit = (e) => {
        const body = {title, desc, status: 0};
        e.preventDefault();
        // dispatch(addNewTodo({body}));
        setDesc('');
        setTitle('');
      }

  return (
    <div>
      <h3>Edit Todo</h3>
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
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
