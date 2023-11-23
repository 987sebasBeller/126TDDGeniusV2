import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";
function buscarEjercicio(titulo){
 return ejercicios.filter(ejercicio=>ejercicio.getTitulo()==titulo)[0];
}
function mostrarImagen(imagenUrl){
  
  return URLIMAGENES+imagenUrl;
}
function escribirEjercicioBuscado(titulo){
    cy.visit("/index.html");
        cy.get("#menubuscarejer").click();
        cy.get("#txtbuscar").type(titulo);
        cy.get("#txtbuscar").type("{enter}");
}
describe("Buscar ejecicio por nombre", () => {

    it("Encuentra los titulos de las coincidencias del ejercicio buscado", () => {
        escribirEjercicioBuscado("Numeros Primos");
      cy.get("#contenidodetallecatalogo h3").should("contain","Numeros Primos");

    });
    it("Encuentra los resumenes de las coincidencias del ejercicio buscado", () => {
        escribirEjercicioBuscado("Numeros Primos");
        cy.get("#contenidodetallecatalogo p").should("contain",buscarEjercicio("Numeros Primos").getResumen());
  
      });

      it("Verifica que la imagen sea visible de las coincidencias del ejercicio buscado", () => {
        escribirEjercicioBuscado("Numeros Primos");
        cy.get("#marcoimagen img").should('be.visible');
  
      });
      it("Encuentra los links de las imagenes predeterminadas que coincidan con el ejercicio buscado", () => {
        escribirEjercicioBuscado("Numeros Primos");
        cy.get("#marcoimagen img").should('have.attr','src',mostrarImagen(IMAGENPREDETERMINADA));
          
        });
        it("Encuentra los links de las imagenes de las coincidencias del ejercicio buscado", () => {
        escribirEjercicioBuscado("Numeros Romanos");
        cy.get("#marcoimagen img").should('have.attr','src',mostrarImagen('10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9'));
  
      });

  });

