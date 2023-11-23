import { Usuario } from "./Usuario";

class ListaUsuarios{
    constructor(){
        this.lista=[];
    }
    getUsuarios(){
        return this.lista;
    }
    agregarUsuario(usuario){
        this.lista.push(usuario);
    }
    convertirJson(jsonUsuarios){
        return [new Usuario(jsonUsuarios.nombre,jsonUsuarios.password)]
    }
};
export {ListaUsuarios};