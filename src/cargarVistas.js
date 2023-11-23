const cabecera = document.getElementById("contCabecera");
const menulateral = document.getElementById("menulateral");

const imagenInicio = document.getElementById("imagenIni");
const imagenCasita = document.getElementById("imagenCasita");

import { llenarEjercicios } from "./presenterCatalogo";

  function crearCabecera(){
    cabecera.innerHTML=`

    <div id="contenedor">
    <div id="cabecera">
        <div id="cabeceraimg">
            <img src="${imagenInicio.src}" alt="" height="150px">
        </div>
        <div id="cabeceratitulo">
        
            <h1>TDDGenius</h1>
            <h2>"Crear el futuro del software, una prueba a la vez"</h2>
        </div>
    </div>
    </div>
    `;

  }
  function crearMenuLateral(){
    menulateral.innerHTML=`
    <div id="imghome"><a href="./inicio.html"><img src="${imagenCasita.src}" width="73px"></a></div>
    <ul>
        <li><a id="menucatalogo" href="./inicio.html">Catálogo</a></li>
        <li><a id="menuacregarejer" href="./frmCrearEjercicio.html">Crear Ejercicio</a></li>
        <li><a id="menubuscarejer" href="./frmBuscarEjer.html">Buscar Ejercicio</a></li>
        <li><a id="menucrearusuario" href="./frmCrearUsuario.html">Crear Usuario</a></li>
        <li><a id="menubuscarejerPorCategoria" href="./frmBuscarEjerPorCategoria.html">Buscar Ejercicio por Categoria</a></li>
        <li><a id="menubuscarejerPorDificultad" href="./frmBuscarEjerPorDificultad.html">Buscar Ejercicio por Dificultad</a></li>

    </ul>
    `;
  }
  crearCabecera();
  crearMenuLateral();
  llenarEjercicios();