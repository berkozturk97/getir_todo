import React, { useEffect } from "react";
import { DragDropContext} from "react-beautiful-dnd";
import TableConstants from '../../constants/TableConstants';

import { useDispatch, useSelector } from "react-redux";
import useStateCallback from "../../hook/useStateCallback";
import { setIsLoading, updateTodo, updateTodos } from "../../redux/actions";
import Table from "../Tables/Table";

import styles from './TodoList.module.css';

function TodoList() {
  const [columns, setColumns] = useStateCallback({});
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const todoFromBackend = todos.todo;
    const inProgressFromBackend = todos.inProgress;
    const doneFromBackend = todos.done;

    setColumns({
      [TableConstants.TODO_LIST]: {
        name: "To do",
        items: todoFromBackend,
      },
      [TableConstants.IN_PROGRESS_LIST]: {
        name: "In Progress",
        items: inProgressFromBackend,
      },
      [TableConstants.DONE_LIST]: {
        name: "Done",
        items: doneFromBackend,
      },
    });
    dispatch(setIsLoading(false));
  }, [dispatch]);

  function renderData2() {
    return (
      <div
        className={styles.container}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {(Object.entries(columns) || []).map(([columnId, column], index) => (
            <Table columnId={columnId} column={column} key={index} />
          ))}
        </DragDropContext>
      </div>
    );
  }

  const onDragEnd = (result, columns, setColumns) => {
      console.log(result);
    
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    const draggable = JSON.parse(draggableId);
    if (source.droppableId !== destination.droppableId) {
      const body = {
        _id: draggable._id,
        status: parseInt(destination.droppableId),
        desc: draggable.desc,
        title: draggable.title
      };
      //farklı columda değişirse.
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      console.log(destination.index);

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      dispatch(updateTodos({ body }));
      destItems[destination.index] = body;
      setColumns(
        {
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        },
        (s) => dispatch(updateTodo(s["0"].items, s["1"].items, s["2"].items))
      );
    } 
  };

  return renderData2();
}

export default TodoList;
