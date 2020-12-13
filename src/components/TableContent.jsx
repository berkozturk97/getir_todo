import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import Modal from './modal/Modal';


function TableContent ({item,index}) {
    return (
        <>
        <Modal />
        <Draggable
          key={item._id}
          draggableId={JSON.stringify(item)}
          index={index}
        >
          {(provided, snapshot) => {
            return (
              <div
                onClick
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
        </>
      );
}

export default TableContent;