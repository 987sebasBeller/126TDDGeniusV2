import { Catalogo } from "./Catalogo.js";
import { Ejercicio } from "./Ejercicio.js";
import { ejercicios } from "./dataCatalogo.js";
import { URLIMAGENES,CERO } from "./constantes.js";
import {crearHTMLejercicios} from "./cargarVistas.js"

const detalleCatalogo = document.getElementById("detallecatalogo");
const catalogo = new Catalogo(ejercicios);
const txtNombre = document.getElementById("txtNombre");
const selecCategoria = document.getElementById("selecCategoria");
const txtDetalle = document.getElementById("txtDetalle");
const txtBuscarNombreEjer=document.getElementById("txtbuscar");
const selectEstado=document.getElementById("selectEstado");

function llenarEjercicios() {
  console.log(catalogo);
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
function crearjercicio() {
  const nombre = txtNombre.value;
  const categoria = selecCategoria.value;
  const detalle = txtDetalle.value;
  let ejercicio = new Ejercicio(nombre, categoria, undefined, detalle);
  if (ejercicio.validarAtributos() == true) {
    mostrarMensajeDeAlerta("Datos subidos correctamente");
    catalogo.agregarEjercicio(ejercicio);
  } else {
    mostrarMensajeDeAlerta("Todos los campos son obligatorios");
  }
}

function buscarEjercicioPorNombre(){
    let nombreBuscado=txtBuscarNombreEjer.value;
    let listaCoincidencias=catalogo.buscarPorNombre(nombreBuscado);
    console.log(listaCoincidencias)
    console.log(nombreBuscado)
    if(listaCoincidencias.length==CERO){
        mostrarMensajeDeAlerta("No se encontro el/los ejercicios");
        detalleCatalogo.innerHTML="";
    }
    else
      crearHTMLejercicios(listaCoincidencias,detalleCatalogo);
}
function buscarEjercicioPorEstado(){
  let estado=selectEstado.value;
  let listaCoincidencias=catalogo.buscarPorEstado(estado);
  console.log(listaCoincidencias)
  console.log(estado)
  if(listaCoincidencias.length==CERO){
      mostrarMensajeDeAlerta("No se encontro el/los ejercicios");
      detalleCatalogo.innerHTML="";
  }
  else
    crearHTMLejercicios(listaCoincidencias,detalleCatalogo);
}


export { llenarEjercicios, crearjercicio, buscarEjercicioPorNombre,buscarEjercicioPorEstado};
