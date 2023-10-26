import { Ejercicio } from "../Ejercicio";
import { Catalogo } from "../Catalogo";
import { ejerciciosPruebas } from "../constantes";

function buscarPorestado(ejercicios,estadoBuscado){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarPorestado(estadoBuscado);
}

describe("Buscar ejercicio por estado", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        expect(buscarPorestado("")).toEqual([]);
      });
   
   
  }
);