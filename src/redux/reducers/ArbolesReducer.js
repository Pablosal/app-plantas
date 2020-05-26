import { ActionTypes } from "../actions/Types";
import icon from "../../images/bonado.png";

let initialState = {
  categorias: ["Magnoliopsida", "Solanum"],
  jardin: [
    {
      image: icon,
      nombre: "Almendro",
      fecha: "08/05/2020",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "1-arbol",
      nombreCientifico: "Prunus dulcis",
      categoria: "Magnoliopsida",
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
      nombre: "Limonero",
      fecha: "08/05/2020",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "2-arbol",
      nombreCientifico: "Citrus × limon",
      categoria: "Magnoliopsida",
      temperatura: "15-18°",
      luz: true,
      transplantado: "Final de Otoño",
      compañeros: ["trebol"],
      descripcion:
        "Es un árbol perenne, a menudo con espinas, que puede alcanzar los cuatro metros de altura, con copa abierta muy ramificada. Sus hojas son alternas, simples, coriáceas, con limbo elíptico de margen más o menos cerrado, glanduloso; a su vez contiene una nervadura penninervial. La inserción de su tallo es peciolada y su disposición es alterna. Es de color verde mate lustroso de unos 5–10 cm de largo y con peciolo cilíndrico articulado. Las flores, comúnmente llamadas (al igual que las del naranjo) azahares o flores de azahar, son solitarias o se organizan en pares o cortas inflorescencias corimbosas axilares. El cáliz tiene 4-7 -generalmente 5- sépalos de forma triangular soldados entre sí y la corola está formada por igual número de pétalos, libres, elípticos alargados, espesos, externamente glandulosos, blancos teñidos de rosa o violáceo en el envés. El androceo está formado por numerosos estambres (20–100) y el gineceo presenta un ovario ínfero con estilo grueso terminado por un estigma mazudo más o menos lobulado. Dicho ovario deriva en un fruto bacciforme en hesperidio con hasta 18 lóculos (gajos). Sus semillas, que pueden faltar por partenocarpia, son de forma más o menos ovoide, blanquecinas/amarillentas, centimétricas, irregularmente y longitudinalmente surcadas.",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Citrus_x_limon_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-041.jpg",
    },
    {
      image: icon,
      nombre: "Tomate",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "3-arbol",
      nombreCientifico: "Solanum lycopersicum",
      categoria: "Solanum",
      temperatura: "23-25 ºC",
      luz: true,
      transplantado: "cuando sale la primera hoja.",
      compañeros: ["trebol"],
      descripcion:
        "Es una planta herbácea anual o perenne. El tallo es erguido y cilíndrico en la planta joven; a medida que ésta crece, el tallo cae y se vuelve anguloso, presenta vellosidades en la mayor parte de sus órganos y glándulas que segregan una sustancia de color verde aromática, puede llegar a medir hasta 2,50 m, ramifica de forma abundante y tiene yemas axilares. Si al final del crecimiento todas las ramificaciones exhiben yemas reproductivas, estas se clasifican como de crecimiento determinado y si terminan con yemas vegetativas, son clasificadas como de crecimiento indeterminado",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    },
  ],
  misPlantas: [
    {
      image: icon,
      nombre: "Almendro",
      fecha: "08/05/2020",
      regado: "en 3 dias mas",
      abono: "en 2 dias mas",
      id: "1-arbol",
    },
  ],
};
const ArbolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AÑADIR_PLANTA:
      console.log(action.payload);
      console.log(state.misPlantas);
      console.log(state.jardin.find((p) => p.nombre === action.payload.nombre));
      return { ...state, misPlantas: [...state.misPlantas, action.payload] };

    case ActionTypes.ELIMINAR_PLANTA:
      return {
        ...state,
        misPlantas: state.misPlantas.filter((j) => j.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ArbolesReducer;
