import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";

describe("Buscar ejecicio por categoria", () => {
  beforeEach(() => {
    cy.visit("/inicio.html");
    cy.get("#menubuscarejerPorCategoria").click();
  });

  function seleccionarCategoria(titulo){
    cy.get("#seleccionarcategoria").select(titulo)
  }
    it("Devuelve el titulo del encabezado buscar por categoria", () => {
   
      cy.get("#titulocatalogo").should("contain", "Buscar Ejercicios por Categoria")

    });

    it("Devuelve el titulo del ejercicio buscado por categoria", () => {
 
       seleccionarCategoria("Numeros")
      cy.get("#contenidodetallecatalogo h3").should("contain", "Numeros Primos")
      
      });
      
      it("Devuelve el titulo del ejercicio buscado por categoria cadena", () => {
      
        seleccionarCategoria("Cadenas")
        cy.get("#contenidodetallecatalogo h3").first().should("contain", "Inversión de cadena")
        
        });
    

  });

