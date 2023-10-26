import { Ejercicio } from "../Ejercicio";
describe("Editar estado ejercicio", () => {
    it("Devuelve el estado del ejercicio de No terminado a Terminado", () => {
      let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1","No Terminado");
      ejercicio.setEstado("Terminado");
        expect(ejercicio.getEstado()).toEqual("Terminado");
      });
      it("Devuelve el estado del ejercicio de terminado a no Terminado", () => {
        let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1","Terminado");
      ejercicio.setEstado("No Terminado");

          expect(ejercicio.getEstado()).toEqual("No Terminado");
        });
  }
);