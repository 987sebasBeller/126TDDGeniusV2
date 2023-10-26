
import { Catalogo } from "../Catalogo";
import { ejerciciosPruebas } from "../constantes";
function buscarPorEstado(ejercicios,estadoBuscado){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarPorEstado(estadoBuscado);
}

describe("Buscar ejercicio por estado", () => {
    it("Devuelve vacio no encontro ninguno de los estados ingresando Terminado", () => {
        expect(buscarPorEstado("Terminado")).toEqual([]);
      });
});