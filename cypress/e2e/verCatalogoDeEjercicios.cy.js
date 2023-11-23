import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES,IMAGENPREDETERMINADA } from "../../src/constantes";
describe("Ver catalogo de ejercicio", () => {
    beforeEach(() => {
        cy.visit("/index.html");
        cy.get("#menucatalogo").click();
      });
    it("Devuelve el titulo del ejericicio ATDD",()=>{
        cy.get("#ejercicio-1").should("contain","Numeros Primos")
    });
    it("Devuelve el resumen del ejericicio ATDD",()=>{
        cy.get("#ejercicio-1 + p").should("contain",ejercicios.filter(ejer=>ejer.getTitulo()=="Numeros Primos")[0].getResumen());
    });
    it("Verifica que la iamgen sea visible el del ejericicio ATDD",()=>{
        cy.get("#imagen-ejer1").should("be.visible")
    });
    it("Devuelve el link  del ejericicio ATDD",()=>{
        cy.get("#imagen-ejer1").should("have.attr","src",URLIMAGENES+IMAGENPREDETERMINADA)
    });
  });
