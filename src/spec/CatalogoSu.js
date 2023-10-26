//import { Ejercicio } from "./EjercicioSu";
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
    getNPrimerosEjercicios(cantidad){
        return this.lista.slice(0,cantidad);
    }
    getEjercicios(){
        return this.lista;
    }
    agregarEjercicio(ejercicio){
        this.lista.push(ejercicio);
    }

    buscarKataPorEstado(estadoEjercicio){
        let coincidencias=[];

        if(estadoEjercicio==""){
            coincidencias= this.lista;
        }
        else{
         coincidencias=this.lista.filter(ejercicio=>ejercicio.getTitulo()==tituloEjercicio , ejercicio=>ejercicio.getEstado()==estadoEjercicio);
        }
        
        return coincidencias;
    }

};
export {Catalogo};