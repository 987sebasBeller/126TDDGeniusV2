//import { Ejercicio } from "../EjercicioSu";
//import { Catalogo } from "../CatalogoSu";
//import { ejerciciosPruebas } from "../constantesSu";

function buscarKataPorEstado(ejercicios,nombreBuscado){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarKataPorEstado(nombreBuscado);
}

describe("Buscar ejercicio por estado", () => {
    it("Devuelve vacio no encontro el estado", () => {
        expect(buscarKataPorEstado(ejerciciosPruebas,"Numeros Romanos")).toEqual([]);
      });
    it("Devuelve la lista de coincidencia con el estado del ejercicio", () => {
        expect(buscarKataPorEstado(ejerciciosPruebas,"Numeros Romanos")).toEqual([{"categoria": "Numeros", "estado": "Terminado/No-Terminado", "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9", "resumen": "resumen2", "titulo": "Numeros Romanos"}]);
    });

  }
);
