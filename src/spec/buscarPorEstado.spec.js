import { Catalogo } from "../Catalogo";
import { Ejercicio } from "../Ejercicio";
import { ejerciciosPruebas } from "../constantes";
describe("Devolver estado del ejercicio", () => {
    it("Devuelve No Terminado ejercicio no terminado", () => {
        let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1")
        expect(ejercicio.getEstado()).toEqual("No Terminado");
      });
      it("Devuelve Terminado ejercicio Terminado", () => {
        let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1","Terminado")
        expect(ejercicio.getEstado()).toEqual("Terminado");
      });
  }
);
describe("Buscar ejercicio por estado", () => {
    it("Devuelve los ejercicios con estado termniado", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarPorEstado("Terminado")).toEqual([{"categoria": "Numeros","estado": "Terminado", "imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph", "resumen": "resumen", "titulo": "Numeros Primos"}]);
      });
  }
);