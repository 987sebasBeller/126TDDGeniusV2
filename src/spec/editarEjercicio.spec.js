import { ejerciciosPruebas } from "../constantes";
import {Ejercicio} from "../models/Ejercicio";
import { Catalogo } from "../models/Catalogo.js";
import "jest-localstorage-mock";
function getTituloModificado(posicionEjercicio,nuevoTitulo){
  let ejercicio=ejerciciosPruebas[posicionEjercicio];
  ejercicio.setTitulo(nuevoTitulo); 
  return ejercicio.getTitulo();
}
describe("Editar Ejercicio", () => {

    it("Permitir modificar el título", () => {
      expect(getTituloModificado(1,"Numeros Romanos X")).toEqual('Numeros Romanos X');
    });
    it("Permitir modificar cualquier título", () => {
        expect(getTituloModificado(1,"Numeros Romanos 10")).toEqual('Numeros Romanos 10');
      });
    it("Permitir modificar la categoría", () => {
        let ejercicio=ejerciciosPruebas[0];
        ejercicio.setCategoria('Numeros');
        expect(ejercicio.getCategoria()).toEqual('Numeros');
      });
      it("Permitir modificar cualquier categoría", () => {
        let ejercicio=ejerciciosPruebas[2];
        ejercicio.setCategoria('Arboles');
        expect(ejercicio.getCategoria()).toEqual('Arboles');
      });
      it("Permitir modificar cualquier resumen", () => {
        let ejercicio=ejerciciosPruebas[1];
        ejercicio.setResumen('resumen4');
        expect(ejercicio.getResumen()).toEqual('resumen4');
      });
  }
);

describe("Editar Ejercicio del Catálogo", () => {

    it("Edita el titulo del ejercicio numero primos", () => {
      let catalogo=new Catalogo(ejerciciosPruebas);
      let ejercicio=catalogo.buscarPorNombre("Numeros Primos")[0];
      ejercicio.setTitulo('Numeros Romanos 10');
      expect(ejercicio.getTitulo()).toEqual('Numeros Romanos 10');
    });
 
    
  }
);






