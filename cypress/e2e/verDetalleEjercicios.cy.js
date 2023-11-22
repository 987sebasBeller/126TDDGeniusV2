import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES,IMAGENPREDETERMINADA } from "../../src/constantes";
describe("Ver detalle del ejercicio", () => {
    it("Devuelve el encabezado Ver Detalle de ejercicio",()=>{
        cy.visit("/");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#titulocatalogo").should("contain","Ver Detalle del ejercicio")
    });
    it("Devuelve el titulo del ejercicio Ver Detalle de ejercicio",()=>{
        cy.visit("/");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#txtNombre").should("contain","Numeros Primos")

    });
  });
