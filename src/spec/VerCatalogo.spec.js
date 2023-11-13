import { Catalogo } from "../models/Catalogo.js";
import { ejerciciosPruebas } from "../constantes.js";
import {Ejercicio} from "../models/Ejercicio.js";

function getTituloEjercicio(titulo){
  let ejercicio= new Ejercicio(titulo);
  return ejercicio.getTitulo();
}
describe("Ver titulo de ejercicio", () => {
    it("Devuelve título de un ejercicio", () => {
      expect(getTituloEjercicio("Numeros Primos")).toEqual("Numeros Primos");
    });
    it("Devuelve título de un ejercicio titulado Numeros Romanos", () => {
        expect(getTituloEjercicio("Numeros Romanos")).toEqual("Numeros Romanos");
      });
  }
);


function getCategoriaEjercicio(titulo,categoria){
  let ejercicio= new Ejercicio(titulo,categoria);
  return ejercicio.getCategoria();
}
describe("Ver categoria de ejercicio", () => {
    it("Devuelve categoria de un ejercicio de categoria numeros", () => {
      expect(getCategoriaEjercicio("Numeros Primos","Numeros")).toEqual("Numeros");
    });
    it("Devuelve categoria de un ejercicio de categoria Juegos", () => {
        expect(getCategoriaEjercicio("Tic-Tac-Toe","Juegos")).toEqual("Juegos");
      });
  }
);

function getResumenEjercicio(titulo,categoria,imagen,resumen){
  let ejercicio= new Ejercicio(titulo,categoria,imagen,resumen);
  return ejercicio.getResumen();
}
describe("Ver resumen del ejercicio", () => {
    it("Devuelve resumen del ejercicio de numero Primos", () => {
        expect(getResumenEjercicio("Numeros Primos","Numeros",undefined,"resumen")).toEqual("resumen");
    });
    it("Devuelve resumen del ejercicio de numeros Romanos", () => {
        expect(getResumenEjercicio("Numeros Romanos","Numeros","imgromanos.png", "resumen2")).toEqual("resumen2");
      });
  }
);

describe("Ver id del ejercicio", () => {
  it("Devuelve el id de un ejercicio ", () => {
    let ejercicio= new Ejercicio();  
    ejercicio.setId(1);
    expect(ejercicio.getId()).toEqual(1);
  });
  it("Devuelve el id de otro ejercicio ", () => {
    let ejercicio= new Ejercicio();  
    ejercicio.setId(2);
    expect(ejercicio.getId()).toEqual(2);
  });
  it("Devuelve el id por defecto de ejercicio sin id ", () => {
    let ejercicio= new Ejercicio();  
    expect(ejercicio.getId()).toEqual(0);
  });
}
);


function verificarListaVaciaCatalogo(ejerciciosCatalogo){
  let catalogo= new Catalogo(ejerciciosCatalogo);
  return catalogo.verificarListaVacia();
}
function getNPrimerosEjerciciosDeCatalogo(ejerciciosCatalogo,cantAListar){
  let catalogo= new Catalogo(ejerciciosCatalogo);
  return catalogo.getNPrimerosEjercicios(cantAListar);
}

describe("Ver ejercicios en el catalogo", () => {
    it("Devuelve No se tiene ejercicios disponibles si la lista esta vacia", () => {
      expect(verificarListaVaciaCatalogo()).toEqual("No se tiene ejercicios disponibles");
    });
    it("Devuelve La lista tiene ejercicio si la lista no esta vacia", () => {
        expect(verificarListaVaciaCatalogo([new Ejercicio()])).toEqual("La lista tiene ejercicios");
      });
      it("Devuelve lista vacia al listar 0 ejercicios", () => {
        expect(getNPrimerosEjerciciosDeCatalogo([new Ejercicio()],0)).toEqual([]);
      });
      it("Devuelve el primer ejercicio", () => {
        expect(getNPrimerosEjerciciosDeCatalogo(ejerciciosPruebas,1)).toEqual(ejerciciosPruebas.slice(0,1));
      });
      it("Devuelve los 2 primeros ejercicios", () => {
        expect(getNPrimerosEjerciciosDeCatalogo(ejerciciosPruebas,2)).toEqual(ejerciciosPruebas.slice(0,2));
      });
 
  }
);
