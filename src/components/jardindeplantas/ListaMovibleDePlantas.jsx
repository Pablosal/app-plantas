import React, { Component, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import "./ComponenteMovible.css";
import { useSelector, useDispatch } from "react-redux";
import { eliminarPlanta } from "../../redux/actions/AbolesActions";
// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator// fake data generator

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
  const arboles = useSelector((state) => state);
  const [items, setItems] = useState(arboles.misPlantas);
  const dispatch = useDispatch();
  useEffect(() => {
    setItems(arboles.misPlantas);
  }, [arboles]);
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
                        src={item.image}
                        width="70px"
                        alt=""
                        className="container_leftSide "
                      />
                      <div className="container_heading d-flex flex-column justify-content-center align-items-center">
                        <h5>{item.nombre}</h5>
                        <h6>
                          Fecha Plantacion <strong>{item.fecha}</strong>
                        </h6>
                      </div>
                    </div>
                    <div
                      className="container_description d-flex justify-content-around"
                      style={{ width: "100%" }}
                    >
                      {item.regado && (
                        <>
                          <i className="fas fa-hand-holding-water fa-2x "></i>
                          <h6>
                            {
                              arboles.jardin.find(
                                (p) => p.nombre === item.nombre
                              ).regado
                            }
                          </h6>
                        </>
                      )}
                      <Link
                        to={`/arboles/${item.nombre.toLowerCase()}`}
                        className="btn btn-danger"
                      >
                        {" "}
                        Ver Planta
                      </Link>
                      {item.abono && (
                        <>
                          <i className="fas fa-seedling fa-2x"></i>
                          <h6>
                            {
                              arboles.jardin.find(
                                (p) => p.nombre === item.nombre
                              ).abono
                            }
                          </h6>
                        </>
                      )}
                      <button
                        className="btn btn-success"
                        onClick={() => dispatch(eliminarPlanta(item.id))}
                      >
                        X
                      </button>
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
