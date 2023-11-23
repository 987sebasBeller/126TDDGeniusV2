import {Usuario} from "./models/Usuario";
import { ListaUsuarios } from "./models/ListaUsuarios";
const txtusername=document.getElementById("txtusername");
const txtreppass=document.getElementById("txtreppass");
const txtpassword=document.getElementById("txtpassword");
const detalleCatalogo = document.getElementById("contenido");
const crear = document.getElementById("btncrearuser");
const usuarios=new ListaUsuarios();
detalleCatalogo.innerHTML="";
function verificarPasswordRepetida(usuario, repetirpassword){
    return usuario.getPassword()===repetirpassword;
}

function crearusuario(){
    let username=txtusername.value;
    let password=txtpassword.value;
    let repetirpassword=txtreppass.value;
    let usuario = new Usuario(username,password);
    if(usuario.validarCampos() && verificarPasswordRepetida(usuario,repetirpassword)){
      alert("Usuario creado con éxitosamente");
      usuarios.agregarUsuario(usuario);
      usuarios.guardarUsuarios();
    }else{
        alert("Todos los campos son obligatorios o la contraseña no es idéntica");

    }
  }
  crear.addEventListener("click",(event)=>{
    event.preventDefault();
    crearusuario();
  });

export {crearusuario};