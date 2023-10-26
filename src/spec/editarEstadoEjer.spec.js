import { Ejercicio } from "../Ejercicio";

function getEstadoSeteado(estadNuevo,estadoAnterior){
  let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1",estadoAnterior);
  ejercicio.setEstado(estadNuevo);
  return ejercicio.getEstado();
  
}

describe("Editar estado ejercicio", () => {
    it("Devuelve el estado del ejercicio de No terminado a Terminado", () => {
        expect(getEstadoSeteado("Terminado","No Terminado")).toEqual("Terminado");
      });
      it("Devuelve el estado del ejercicio de terminado a no Terminado", () => {

          expect(getEstadoSeteado("No Terminado","Terminado")).toEqual("No Terminado");
        });
  }
);