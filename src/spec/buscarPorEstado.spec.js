import { Catalogo } from "../Catalogo";
import { Ejercicio } from "../Ejercicio";
describe("Devolver estado del ejercicio", () => {
    it("Devuelve No Terminado ejercicio no terminado", () => {
        let ejercicio=new Ejercicio("ejer1","c1",undefined,"resumen1")
        expect(ejercicio.getEstado()).toEqual("No Terminado");
      });

  }
);