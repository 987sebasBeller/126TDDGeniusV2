import {catalogo} from "./presenterCatalogo";
import {URLIMAGENES} from "./constantes";
const urlParametro=new URLSearchParams(window.location.search);
const valorTitulo=urlParametro.get('titulo');
const ejercicio=catalogo.buscarPorNombre(valorTitulo)[0];
const detalleCatalogo = document.getElementById("contenido");

document.getElementById("txtNombre").innerHTML=valorTitulo;
document.getElementById("imageContenidoDetalle").querySelector("img").src=URLIMAGENES+ejercicio.getImagen();
let categoria=document.getElementById("categoriaDetalle")
categoria.innerHTML=ejercicio.getCategoria();
let dificultad=document.getElementById("dificultadDetalle")
dificultad.innerHTML=ejercicio.getDificultad();
document.getElementById("resumen").innerHTML=ejercicio.getResumen();

detalleCatalogo.style.display="none";
