import {catalogo} from "./presenterCatalogo";
import {URLIMAGENES} from "./constantes";
const urlParametro=new URLSearchParams(window.location.search);
const valorTitulo=urlParametro.get('titulo');
const ejercicio=catalogo.buscarPorNombre(valorTitulo)[0];
const detalleCatalogo = document.getElementById("contenido");

document.getElementById("txtNombre").innerHTML=valorTitulo;
document.getElementById("imageContenidoDetalle").querySelector("img").src=URLIMAGENES+ejercicio.getImagen();
document.getElementById("categoria").innerHTML=ejercicio.getCategoria()
detalleCatalogo.style.display="none";
