import { CERO,URLIMAGENES } from "./constantes.js";
import {ejercicios} from "./dataCatalogo.js"
import { Catalogo } from "./models/Catalogo.js";
import { Ejercicio } from "./models/Ejercicio.js";
const detalleCatalogo = document.getElementById("contenido");
let catalogo= new Catalogo(ejercicios);

function crearHTMLejercicios(listaEjercicios, contenedor) {
  contenedor.innerHTML = "";
  let ejerciciosHTML = `
  <div id="contenidocatalogo">
  <div id="datoscatalogo">
      <div id="detallecatalogo">`;
  let i=1;
  listaEjercicios.forEach((ejercicio) => {
    ejercicio.setId(i);
    let imagen=URLIMAGENES+ejercicio.getImagen();
    ejerciciosHTML += `
        <div id="imgdetallecatalog">
          <div id="marcoimagen">
            <img id="imagen-ejer${ejercicio.getId()}" src=${imagen} width="150px" height="100px">
          </div>
        </div>
        <div id="contenidodetallecatalogo">
     
        <input id="botonEditar" type="submit" data-value="${ejercicio.getTitulo()}" value="Editar"> 
          <h3 id="ejercicio-${ejercicio.getId()}">${ejercicio.getTitulo()}</h3>
          <p>${ejercicio.getResumen()}<input id="btnVermas" type="submit" data-value="${ejercicio.getTitulo()}" value="Ver mas"></p>
           <div>Categoria:<span id="categoria">${ejercicio.getCategoria()}<span id="dificultad"> | Dificultad:${ejercicio.getDificultad()}</span></span></div>
          
         
        

        </div>`;
        i++;
  });
  ejerciciosHTML+="</div></div></div>";
  contenedor.innerHTML += ejerciciosHTML;
}
  
function llenarEjercicios() {

  if (
    catalogo.verificarListaVacia() == "No se tiene ejercicios disponibles" ||
    detalleCatalogo == null
  ) {
    detalleCatalogo.innerHTML += `<p>${catalogo.verificarListaVacia()}</p>`;
    return;
  }
  crearHTMLejercicios(catalogo.getEjercicios(), detalleCatalogo);
}
function mostrarMensajeDeAlerta(mensaje){
  alert(mensaje);
}

export { llenarEjercicios, crearjercicio, buscarEjercicioPorNombre, crearHTMLejercicios,catalogo};
