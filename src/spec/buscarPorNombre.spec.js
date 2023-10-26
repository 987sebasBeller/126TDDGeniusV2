import { Ejercicio } from "../Ejercicio";
import { Catalogo } from "../Catalogo";
import { ejerciciosPruebas } from "../constantes";

function buscarPorNombre(ejercicios,nombreBuscado){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarPorNombre(nombreBuscado);
}

describe("Buscar ejercicio por nombre", () => {
    it("Devuelve vacio no encontro el ejercicio", () => {
        expect(buscarPorNombre(ejerciciosPruebas,"Numeros Random")).toEqual([]);
      });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        expect(buscarPorNombre(ejerciciosPruebas,"Numeros Romanos")).toEqual([{"categoria": "Numeros","estado": "No Terminado", "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9", "resumen": "resumen2", "titulo": "Numeros Romanos"}]);
    });
    it("Devuelve la lista de coincidencia con el nombre del ejercicio", () => {
        expect(buscarPorNombre(ejerciciosPruebas,"Numeros Primos")).toEqual([{"categoria": "Numeros","estado": "No Terminado", "imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph", "resumen": "resumen", "titulo": "Numeros Primos"}]);
    });
    it("Devuelve la lista de coincidencia con el ejercicio titulado numeros random", () => {
      ejerciciosPruebas.push(new Ejercicio("Numeros Random",undefined,undefined,undefined));
      expect(buscarPorNombre(ejerciciosPruebas,"Numeros Random")).toEqual([{"categoria": "","estado": "No Terminado","imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph","resumen": "","titulo": "Numeros Random"}]);
    });
    it("Devuelve la lista completa si no se ingresa un nombre para buscar", () => {
      expect(buscarPorNombre(ejerciciosPruebas,"")).toEqual(ejerciciosPruebas);
    });
  }
);


