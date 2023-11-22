import {catalogo} from "./presenterCatalogo";
const urlParametro=new URLSearchParams(window.location.search);
const valorTitulo=urlParametro.get('titulo');
const ejercicio=catalogo.buscarPorNombre(valorTitulo)[0];
const detalleCatalogo = document.getElementById("contenido");

document.getElementById("txtNombre").innerHTML=valorTitulo;
detalleCatalogo.style.display="none";
