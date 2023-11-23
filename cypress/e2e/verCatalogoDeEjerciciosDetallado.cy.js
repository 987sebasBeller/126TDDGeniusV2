import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES,IMAGENPREDETERMINADA } from "../../src/constantes";
function irAMenuCatalogo(){
    cy.visit("/index.html");
    cy.get("#menucatalogo").click();
}
describe("Ver catalogo de ejercicio detallado", () => {
    it("Se previsualiza la categoria del Ejercicio de Numeros primos",()=>{
        irAMenuCatalogo();
        cy.get("#ejercicio-1 + p")
        .next("div").get("#categoria").should("contain", "Numeros");
      
    });
    it("Se previsualiza la categoria del Ejercicio de Calculadora de IMC",()=>{
        irAMenuCatalogo();
        cy.get("#ejercicio-9 + p")
        .next("div").find("#categoria").should("contain", "Salud");
      
    });
    it("Se previsualiza la dificultad del Ejercicio de Numeros primos",()=>{
        irAMenuCatalogo();
        cy.get("#ejercicio-1 + p")
        .next("div").get("#dificultad").should("contain", "ALTA");
      
    });
    it("Se previsualiza la dificultad del Ejercicio de Calculadora de IMC",()=>{
        irAMenuCatalogo();

        cy.get("#ejercicio-9 + p")
        .next("div").find("#dificultad").should("contain", "MEDIA");
      
    });
  });