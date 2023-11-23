import {catalogo} from "./presenterCatalogo";
const urlParametro=new URLSearchParams(window.location.search);
const valorTitulo=urlParametro.get('titulo');
const ejercicio=catalogo.buscarPorNombre(valorTitulo)[0];
const detalleCatalogo = document.getElementById("contenido");
const categoria = document.getElementById("selecCategoria");
const detalle = document.getElementById("txtDetalle");
const btnEditar=document.getElementById("editarregistro");
document.getElementById("txtNombre").value=valorTitulo;
detalleCatalogo.style.display="none";
categoria.value=ejercicio.getCategoria();
detalle.innerHTML=ejercicio.getResumen();
btnEditar.addEventListener("click",(e)=>{
    e.preventDefault();
    const titulo=document.getElementById("txtNombre");
    ejercicio.setTitulo(titulo.value);
    ejercicio.setCategoria(categoria.value);
    ejercicio.setResumen(detalle.value);
    catalogo.guardarEjercicios();

});
console.log(detalle)