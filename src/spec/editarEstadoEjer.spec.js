import { Ejercicio } from "../Ejercicio";
describe("Editar estado ejercicio", () => {
    it("Devuelve el estado del ejercicio de No terminado a Terminado", () => {
      let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1","No Terminado");
        expect(ejercicio.setEstado("Terminado")).toEqual("Terminado");
      });
  }
);