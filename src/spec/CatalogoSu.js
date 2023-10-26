import { Ejercicio } from "./EjercicioSu";
import { ejerciciosPruebas } from "./constantesSu";
class Catalogo{
    constructor(lista=[]){
        this.lista=lista;
    }
    verificarListaVacia(){
        let mensaje="No se tiene el estado disponible del ejercicio"
        if(this.lista.length!=0) mensaje="La lista de ejerciicos no tiene estado";
        return mensaje;
    }
    

};
export {Catalogo};