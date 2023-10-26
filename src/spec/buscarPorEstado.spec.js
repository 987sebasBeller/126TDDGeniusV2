import { Catalogo } from "../Catalogo";
import { Ejercicio } from "../Ejercicio";
import { ejerciciosPruebas } from "../constantes";
function getEstado(estado){
    let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1",estado);
    return ejercicio.getEstado();

}
describe("Devolver estado del ejercicio", () => {
    it("Devuelve No Terminado ejercicio no terminado", () => {
        expect(getEstado("No Terminado")).toEqual("No Terminado");
      });
      it("Devuelve Terminado ejercicio Terminado", () => {
        expect(getEstado("Terminado")).toEqual("Terminado");
      });
  }
);
function buscarPorEstado(ejercicios,estado){
    let catalogo=new Catalogo(ejercicios);
    return catalogo.buscarPorEstado(estado);

}
describe("Buscar ejercicio por estado", () => {
    it("Devuelve los ejercicios con estado termniado", () => {
        expect(buscarPorEstado(ejerciciosPruebas,"Terminado")).toEqual([{"categoria": "Numeros","estado": "Terminado", "imagen": "1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph", "resumen": "resumen", "titulo": "Numeros Primos"}]);
      });
      it("Devuelve los ejercicios con estado no termniado", () => {
        expect(buscarPorEstado(ejerciciosPruebas,"No Terminado")).toEqual(ejerciciosPruebas.filter(ele=>ele.getEstado()=="No Terminado"));
      });
  }
);