import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/actions";
import TodoItem from "./TodoItem";

function TodoList() {
  const [isVisible, setIsVisible] = useState(true);
  const [datalar, setDatalar] = useState([]);
  const [columns, setColumns] = useState({});
  const [columnsFromBackend,setColumnsFromBackend] = useState({});
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    setIsVisible(true);
    const loadData = async () => {
      await dispatch(getTodo());
        const itemsFromBackend = todos.todos;
         setColumns({ "1": {
            name: "To do",
            items: itemsFromBackend,
          },
          "2": {
            name: "In Progress",
            items: [],
          },
          "3": {
            name: "Done",
            items: [],
          },});
           
    };
    loadData();
    console.log(todos.isLoading);
    setIsVisible(false);  
  }, [dispatch]);


//   const itemsFromBackend = [
//     { id: 1, content: "First task" },
//     { id: 2, content: "Second task" },
//     { id: 3, content: "Third task" },
//     { id: 4, content: "Fourth task" },
//     { id: 5, content: "Fifth task" }
//   ];
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         let todo = response.data.slice(0,10);

//         setDatalar(todo);
//     })
//   },[])

  
  

//   function renderData() {
//     return (todos.todos || []).map((todo) => {
//       return <TodoItem key={todo.id} todo={todo} />;
//     });
//   }

  //   return (
  //         <div className="my-3">{renderData()}</div>
  //   );

  function renderData2() {
      return (
        <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
        // onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {(Object.entries(columns) || []).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                              console.log(item);
                            return (
                              <Draggable
                                key={item.title}
                                draggableId={item.title}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      )
  }

if (isVisible === true) 
    {
        // console.log(todos.isLoading)
        return (<div></div>)
    }
  else {
    return renderData2()
  }
}

export default TodoList;
