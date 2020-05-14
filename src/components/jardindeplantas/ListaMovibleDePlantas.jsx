import React, { Component, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import icon from "../../images/bonado.png";
import "./ComponenteMovible.css";
const DUMMY_DATA = [
  {
    image: icon,
    nombre: "Almendro",
    fecha: "08/05/2020",
    regado: "en 3 dias mas",
    abono: "en 2 dias mas",
    id: "1-arbol",
  },
  {
    image: icon,
    nombre: "Palto",
    fecha: "08/05/2020",
    regado: "en 5 dias mas",
    abono: "en 28 dias mas",
    id: "2-arbol",
  },
  {
    image: icon,
    nombre: "Pasto",
    fecha: "08/05/2019",
    regado: "en 3 dias mas",
    abono: "en 2 dias mas",
    id: "3-arbol",
  },
];

// fake data generator
const getItems = () => {
  return DUMMY_DATA;
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: "20px",
  margin: `0 0 ${grid}px 0`,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "500px",
  height: "auto",
  alignItems: "center",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  flexDirection: "column",
});

const ListaMovibleDePlantas = () => {
  const [items, setItems] = useState(getItems());
  const onDragEnd = (resultado) => {
    if (!resultado.destination) return;
    const newItems = reorder(
      items,
      resultado.source.index,
      resultado.destination.index
    );

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="earthbounding"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div
                      className="left_container d-flex justify-content-around p-3 "
                      style={{ width: "100%" }}
                    >
                      <img
                        src={icon}
                        width="70px"
                        alt=""
                        className="container_leftSide "
                      />
                      <div className="container_heading d-flex flex-column justify-content-center align-items-center">
                        <h5>Almendro</h5>
                        <h6>
                          Fecha Plantacion <strong>12/08/09</strong>
                        </h6>
                      </div>
                    </div>
                    <div
                      className="container_description d-flex justify-content-around"
                      style={{ width: "100%" }}
                    >
                      <i className="fas fa-hand-holding-water fa-2x "></i>
                      <i class="fas fa-seedling fa-2x"></i>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default ListaMovibleDePlantas;
