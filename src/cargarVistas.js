import { URLIMAGENES } from "./constantes"
const contenedor = document.getElementById("contenido");

function crearHTMLejercicios(listaEjercicios, contenedor) {
    contenedor.innerHTML = "";
    let ejerciciosHTML = ``;
    listaEjercicios.forEach((ejercicio) => {
      let imagen=URLIMAGENES+ejercicio.getImagen();
      ejerciciosHTML += `
          <div id="imgdetallecatalog">
            <div id="marcoimagen">
              <img src=${imagen} width="150px" height="100px">
            </div>
          </div>
          <div id="contenidodetallecatalogo">
          <p>Estado:${ejercicio.getEstado()}</p>
            <h3>${ejercicio.getTitulo()}</h3>
            <p>${ejercicio.getResumen()}<span>Ver mas</span></p>
          </div>`;

    });
    contenedor.innerHTML += ejerciciosHTML;
  }
  function crearfrmListarEjercicios(){
    contenedor.innerHTML+=` <div id="contenidocatalogo">
    <div id="datoscatalogo">

        <div id="detallecatalogo">


        </div>
    </div>

</div>`
  }
  function crearfrmBuscar(){
    contenedor.innerHTML+= `<div id="busqueda">
    <div id="formulariocategoria">
        <form>

            <input type="search" placeholder="Buscar nombre" id="txtbuscar">

        </form>
    </div>

</div>`
  }
  function crearfrmejercicio(){
    contenedor.innerHTML+=`
    <div id="formularioejercicio">
                    <!-- <<div id="titulocatalogo">FORMULARIO PARA CREAR EJERCICIO</div> --> 
                    <div id="formulariocategoria">
                        <form>
                            <label>Nombre:</label>
                            <input type="text" placeholder="Nombre de ejercicio" id="txtNombre">
                            <label>Categoría:</label>
                            <select name="categoria" id="selecCategoria">

                                <option value="Números">Número</option>
                                <option value="Geometría">Geometría</option>
                                <option value="Cadenas">Cadenas</option>
                                <option value="Juegos">Juegos</option>
                            </select>
                            <label>Detalle:</label>
                            <textarea id="txtDetalle" name="txtDetalle" placeholder="Ingresar el detalle del ejercicio">

        </textarea>
                            <input type="submit" id="crearregistro" value="CREAR">

                        </form>
                    </div>


                </div>
    `
  }
  function frmCrearUsuario(){
    contenedor.innerHTML+=`
    <div id="formulariocrearejercicio">
                    
    <form>
        <label>Username:</label>
        <input type="text" placeholder="Ingrese nombre de usuario" id="txtusername">
        <label>Password:</label>
        <input type="text" placeholder="Ingrese contraseña" id="txtpassword">
        <label>Repetir Password:</label>
        <input type="text" id="txtreppass"  placeholder="Repita Contraseña">
       
        <input type="submit" id="btncrearuser" value="CREAR">
       

    </form>


</div>
    `
  }
  function crearfrmBuscarPorEstado(){
    contenedor.innerHTML+= `<div id="busqueda">
    <div id="formulariocategoria">
        <form>

                 <select name="Estado" id="selectEstado">

                                <option value="Terminado">Terminado</option>
                                <option value="No Terminado">No Terminado</option>
                            </select>
        </form>
    </div>

</div>`
  }
  crearfrmBuscar();
  crearfrmBuscarPorEstado();
  crearfrmListarEjercicios();
  crearfrmejercicio();
  frmCrearUsuario();
  export {crearHTMLejercicios};