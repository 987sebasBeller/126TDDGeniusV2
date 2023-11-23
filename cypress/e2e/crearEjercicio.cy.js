describe("Crear Ejercicio", () => {
  beforeEach(() => {
    cy.visit("/inicio.html");
    cy.get("#menuacregarejer").click();
  });

  function crearEjercicio(nombre,categoria,detalle){
    cy.get("#txtNombre").type(nombre); 
    cy.get("#txtNombre").should('have.value',nombre); 
    cy.get("#selecCategoria").select(categoria); 
    cy.get("#txtDetalle").type(detalle); 
    cy.get("#txtDetalle").invoke('val').should('contain',detalle); 
    cy.get("#crearregistro").click();
  }

  it("Verificar que los campos tengan información", () => {
   
    cy.get("#crearregistro").click();
    cy.on('window:alert', (str) => {
    expect(str).to.equal(`Todos los campos son obligatorios`)
    })
  });

    it("Registrar un nuevo ejercicio", () => {
    
      crearEjercicio("Romanos II","Geometría","Perro salchicha")
      cy.on('window:alert', (str) => {
       expect(str).to.equal(`Datos subidos correctamente`)
      })
    });

    it("Verificar que el ejercicio se ha creado con éxito", () => {
     
      crearEjercicio("Romanos II","Geometría","Perro salchicha")
      cy.get("#menucatalogo").click();
      cy.get("#contenidodetallecatalogo #ejercicio-12").should('contain','Romanos II'); 
    
     
    });

    it("Verificar que el detalle del ejercicio se visualice  correctamente", () => {
     
      crearEjercicio("Romanos II","Geometría","Perro salchicha")
      cy.get("#menucatalogo").click();
      cy.get("#ejercicio-12 + p").should('contain','Perro salchicha'); 
    
     
    });
 

});
