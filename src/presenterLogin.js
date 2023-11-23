const btnLogin=document.getElementById("btnInicioSesion");
const nombreUsuario=document.getElementById("txtusuario");
const passwordUsuario=document.getElementById("txtpassword");
import { ListaUsuarios } from "./models/ListaUsuarios";
let usuarios=new ListaUsuarios();
btnLogin.addEventListener("click",(event)=>{
    let usuario=usuarios.buscarUsuario(nombreUsuario);
    if(nombreUsuario.value=="admin123" && passwordUsuario.value=="123" ){
        window.location.href=`inicio.html`;
    }
});

