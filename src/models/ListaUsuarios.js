import { Usuario } from "./Usuario";

class ListaUsuarios{
    constructor(){
        this.lista=[];
    }
    getUsuarios(){
        let usuarios= JSON.parse(localStorage.getItem("listaUsuarios"));
        if(usuarios) {
           usuarios= this.convertirJson(usuarios);
            this.lista=usuarios;
        }
        return this.lista;
    }
    agregarUsuario(usuario){
        this.lista.push(usuario);
    }
    convertirJson(jsonUsuarios){
        let lista=[];
        jsonUsuarios.forEach((usuario) => {
             lista.push(new Usuario(usuario.nombre,usuario.password));
        });
        return lista;
    }
    guardarUsuarios(){
        const objetoJSON = JSON.stringify(this.lista);
        localStorage.setItem("listaUsuarios", objetoJSON);
    }
    buscarUsuario(nombre){
        return [new Usuario("pepe","123")];
    }
};
export {ListaUsuarios};