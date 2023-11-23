class ListaUsuarios{
    constructor(){
        this.lista=[];
    }
    getUsuarios(){
        return this.lista;
    }
    agregarUsuario(usuario){
        this.lista=[usuario];
    }
};
export {ListaUsuarios};