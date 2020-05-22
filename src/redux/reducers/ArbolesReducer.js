import { ActionTypes } from "../actions/Types";
import icon from "../../images/bonado.png";

let initialState = {
  categorias: ["Ficeae", "Limonero"],
  jardin: [
    {
      image: icon,
      nombre: "Almendro",
      fecha: "08/05/2020",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "1-arbol",
      nombreCientifico: "Prunus dulcis",
      categoria: "	Magnoliopsida",
      temperatura: "15-18°",
      luz: true,
      transplantado: "Final de Otoño",
      compañeros: ["trebol"],
      descripcion:
        "Puede alcanzar de 3 a 5 m de altura. De tallo liso, verde y a veces amarillo cuando es joven, pasa a ser agrietado, escamoso, cremoso y grisáceo cuando es adulto. Son de hoja caduca, las hojas son simples, lanceoladas, largas, estrechas y puntiagudas, de 7,5 a 12,5 cm de longitud y color verde intenso, con bordes dentados o festoneados. La flor solitaria o en grupos de 2 o 4, es pentámera con cinco sépalos, cinco pétalos con colores variables entre blanco y rosado dependiendo de las especies de unos 3 a 5 cm de diámetro. Los frutos de unos 3 a 6 cm de longitud en drupa con exocarpio y mesocarpio correosos y endocarpio duro, oblongos, elipsoidales, con carne seca, tomentosos, de color verde, dehiscentes. Tarda de 5 a 6 meses en madurar desde que cuaja.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Urue%C3%B1a_almendro1_lou.jpg",
    },
    {
      image: icon,
      nombre: "Palto",
      fecha: "19/05/2020",
      regado: "en 5 dias mas",
      abono: "en 28 dias mas",
      id: "2-arbol",
    },
    {
      image: icon,
      nombre: "Pasto",
      fecha: "10/05/2019",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "3-arbol",
    },
  ],
};
const ArbolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AÑADIR_PLANTA:
      console.log(state.jardin);
      return {
        jardin: [...state.jardin, action.payload],
      };

    case ActionTypes.ELIMINAR_PLANTA:
      return {
        jardin: state.jardin.filter((j) => j.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ArbolesReducer;
