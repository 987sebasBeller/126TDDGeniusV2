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
};
export {ListaUsuarios};