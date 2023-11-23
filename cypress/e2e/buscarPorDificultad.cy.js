import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";

describe("Buscar ejecicio por dificultad", () => {
    beforeEach(() => {
      cy.visit("/inicio.html");
      cy.get("#menubuscarejerPorDificultad").click();
    });
  
    function seleccionarDificultad(titulo){
      cy.get("#seleccionarDificultad").select(titulo)
    }


it("Devuelve el titulo del encabezado buscar por dificultad", () => {
    cy.get("#titulocatalogo").should("contain", "Buscar Ejercicios por Dificultad")

    });
    
it("Devuelve el titulo del ejercicio al buscar dificultad BAJA", () => {
    seleccionarDificultad("BAJA")
    cy.get("#contenidodetallecatalogo h3").should("contain", "Cálculo del factorial")
    
    });

it("Devuelve el titulo del ejercicio al buscar dificultad ALTA", () => {
    seleccionarDificultad("ALTA")
    cy.get("#contenidodetallecatalogo h3").first().should("contain", "Numeros Primos")
        
    });
});

