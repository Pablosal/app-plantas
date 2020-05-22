import { ActionTypes } from "./Types";

export const añadirPlanta = (planta) => ({
  type: ActionTypes.AÑADIR_PLANTA,
  payload: planta,
});
export const eliminarPlanta = (id) => ({
  type: ActionTypes.ELIMINAR_PLANTA,
  payload: id,
});
