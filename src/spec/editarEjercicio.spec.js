import { ejerciciosPruebas } from "../constantes";
import {Ejercicio} from "../models/Ejercicio";
import { Catalogo } from "../models/Catalogo.js";
import "jest-localstorage-mock";
function getTituloModificado(posicionEjercicio,nuevoTitulo){
  let ejercicio=ejerciciosPruebas[posicionEjercicio];
  ejercicio.setTitulo(nuevoTitulo); 
  return ejercicio.getTitulo();
}
function getCategoriaModificado(posicionEjercicio,nuevoCategoria){
  let ejercicio=ejerciciosPruebas[posicionEjercicio];
  ejercicio.setCategoria(nuevoCategoria); 
  return ejercicio.getCategoria();
}
function getResumenModificado(posicionEjercicio,nuevoResumen){
  let ejercicio=ejerciciosPruebas[posicionEjercicio];
  ejercicio.setResumen(nuevoResumen); 
  return ejercicio.getResumen();
}
describe("Editar Ejercicio", () => {

    it("Permitir modificar el título", () => {
      expect(getTituloModificado(1,"Numeros Romanos X")).toEqual('Numeros Romanos X');
    });
    it("Permitir modificar cualquier título", () => {
        expect(getTituloModificado(1,"Numeros Romanos 10")).toEqual('Numeros Romanos 10');
      });
    it("Permitir modificar la categoría", () => {
        expect(getCategoriaModificado(0,"Numeros")).toEqual('Numeros');
      });
      it("Permitir modificar cualquier categoría", () => {
        expect(getCategoriaModificado(2,"Arboles")).toEqual('Arboles');
      });
      it("Permitir modificar cualquier resumen", () => {
        expect(getResumenModificado(1,"resumen4")).toEqual('resumen4');
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






