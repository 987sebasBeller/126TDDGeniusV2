import { ejerciciosPruebas } from "../constantes";
import {Ejercicio} from "../models/Ejercicio";
import { Catalogo } from "../models/Catalogo.js";
import "jest-localstorage-mock";
function getTituloModificado(ejercicioPrueba,nuevoTitulo){
  let ejercicio=ejercicioPrueba;
  ejercicio.setTitulo(nuevoTitulo); 
  return ejercicio.getTitulo();
}
function getCategoriaModificado(ejercicioPrueba,nuevoCategoria){
  let ejercicio=ejercicioPrueba;
  ejercicio.setCategoria(nuevoCategoria); 
  return ejercicio.getCategoria();
}
function getResumenModificado(ejercicioPrueba,nuevoResumen){
  let ejercicio=ejercicioPrueba;
  ejercicio.setResumen(nuevoResumen); 
  return ejercicio.getResumen();
}
describe("Editar Ejercicio", () => {

    it("Permitir modificar el título", () => {
      expect(getTituloModificado(ejerciciosPruebas[1],"Numeros Romanos X")).toEqual('Numeros Romanos X');
    });
    it("Permitir modificar cualquier título", () => {
        expect(getTituloModificado(ejerciciosPruebas[1],"Numeros Romanos 10")).toEqual('Numeros Romanos 10');
      });
    it("Permitir modificar la categoría", () => {
        expect(getCategoriaModificado(ejerciciosPruebas[0],"Numeros")).toEqual('Numeros');
      });
      it("Permitir modificar cualquier categoría", () => {
        expect(getCategoriaModificado(ejerciciosPruebas[2],"Arboles")).toEqual('Arboles');
      });
      it("Permitir modificar cualquier resumen", () => {
        expect(getResumenModificado(ejerciciosPruebas[1],"resumen4")).toEqual('resumen4');
      });
  }
);
function buscarEjercicioPorNombreEnCatalogo(ejerciciosPruebas,nombre){
  let catalogo=new Catalogo(ejerciciosPruebas);
  let ejercicio=catalogo.buscarPorNombre(nombre)[0];
  return ejercicio;
}

describe("Editar Ejercicio del Catálogo", () => {

    it("Edita el titulo del ejercicio numero primos", () => {
      let ejercicio=buscarEjercicioPorNombreEnCatalogo(ejerciciosPruebas,"Numeros Primos")
      expect(getTituloModificado(ejercicio,"Numeros Romanos 10")).toEqual('Numeros Romanos 10');
    });
 
    
  }
);






