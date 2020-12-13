import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { visibleModal, selectObject } from "../../redux/actions";

function TableContent({ item, index }) {
  let dispatch = useDispatch();

  const openModal = () => {
    dispatch(selectObject(item));
    dispatch(visibleModal(true));
  };

  return (
    <Draggable key={item._id} draggableId={JSON.stringify(item)} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            onClick={() => openModal()}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              justifyContent: "center",
              borderRadius: 8,
              userSelect: "none",
              padding: 10,
              margin: "0 0 8px 0",
              minHeight: "50px",
              backgroundColor: item.status === 0 ? "#5D3EBC" : (item.status === 1 ? "#13910E"  : "#BF0003"),
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <p style={{fontSize: 15}}>{item.title}</p>
          </div>
        );
      }}
    </Draggable>
  );
}

export default TableContent;
