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
    it("Devuelve la lista de coincidencia con el nombre y estado del ejercicio", () => {
        expect(buscarKataPorEstado(ejerciciosPruebas,"Numeros Romanos")).toEqual([{"categoria": "Numeros", "estado": "Terminado/No-Terminado", "imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph", "resumen": "resumen", "titulo": "Numeros Romanos"}]);
    });
    it("Devuelve la lista de coincidencia con el ejercicio titulado Numeros Romanos y el estado en el que se encuentra", () => {
        ejerciciosPruebas.push(new Ejercicio("Numeros Romanos",undefined,undefined,undefined,undefined));
        expect(buscarKataPorEstado(ejerciciosPruebas,"Numeros Romanos")).toEqual([{"categoria": "", "estado": "","imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph","resumen": "","titulo": "Numeros Romanos"}]);
      });
    it("Devuelve la lista completa de ejercicios si no se ingresa nada", () => {
        expect(buscarKataPorEstado(ejerciciosPruebas,"")).toEqual(ejerciciosPruebas);
      });
  }
);
