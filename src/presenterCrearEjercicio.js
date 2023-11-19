import { Ejercicio } from "./models/Ejercicio";
const txtNombre = document.getElementById("txtNombre");
const selecCategoria = document.getElementById("selecCategoria");
const txtDetalle = document.getElementById("txtDetalle");
const btnregistrar = document.getElementById("crearregistro");
const contenido=document.getElementById("contenido");
catalogo= new Catalogo();
contenido.innerHTML="";

btnregistrar.addEventListener("click", (env) => {
    env.preventDefault();
    crearjercicio();
  });
  
function mostrarMensajeDeAlerta(mensaje){
    alert(mensaje);
  }

  function crearjercicio() {
    const nombre = txtNombre.value;
    const categoria = selecCategoria.value;
    const detalle = txtDetalle.value;
    let ejercicio = new Ejercicio(nombre, categoria, undefined, detalle);
    if (ejercicio.validarAtributos()) {
      mostrarMensajeDeAlerta("Datos subidos correctamente");
      catalogo.agregarEjercicio(ejercicio);
      catalogo.guardarEjercicios();
    } else {
      mostrarMensajeDeAlerta("Todos los campos son obligatorios");
    }

  }