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
        let lista=[];
        jsonUsuarios.forEach((usuario) => {
             lista.push(new Usuario(usuario.nombre,usuario.password));
        });
        return lista;
    }
};
export {ListaUsuarios};