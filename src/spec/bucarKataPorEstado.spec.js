import { Ejercicio } from "../EjercicioSu";
import { Catalogo } from "../CatalogoSu";
import { ejerciciosPruebas } from "../constantesSu";

function buscarKataPorEstado(ejercicios,nombreBuscado){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarKataPorEstado(nombreBuscado);
}

describe("Buscar ejercicio por estado", () => {
    it("Devuelve vacio no encontro el estado", () => {
        expect(buscarKataPorEstado(ejerciciosPruebas,"Terminado/No terminado")).toEqual([]);
      });
    
  }
);
