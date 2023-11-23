import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES,IMAGENPREDETERMINADA } from "../../src/constantes";
describe("Ver detalle del ejercicio", () => {
    it("Devuelve el encabezado Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#titulocatalogo").should("contain","Ver Detalle del ejercicio")
    });
    it("Devuelve el titulo del ejercicio Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#txtNombre").should("contain","Numeros Primos")

    });
    it("Verifica que la imagen del  del ejercicio Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#imageContenidoDetalle img").should("be.visible")

    });
    it("Devuelve la categoria  del ejercicio en Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#categoria").should("contain","Numeros")

    });
    it("Devuelve la dificultad  del ejercicio en Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#dificultad").should("contain","ALTA");

    });
    it("Devuelve el resumen del ejercicio en Ver Detalle de ejercicio",()=>{
        cy.visit("/index.html");
        cy.get("#ejercicio-1").next("p").find("#btnVermas").click();
        cy.get("#resumen").should("contain",ejercicios[0].getResumen());

    });
  });
