import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import TableContent from './TableContent';

function Table({columnId, column, index}) {
  return  (
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
                    {column.items.map((item, index) => (<TableContent key={index} item={item} index={index}  />)
                      
                    )}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      );
}

export default Table;