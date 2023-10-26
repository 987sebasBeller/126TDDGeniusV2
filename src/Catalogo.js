import { Ejercicio } from "./Ejercicio";
import { ejerciciosPruebas } from "./constantes";
class Catalogo{
    constructor(lista=[]){
        this.lista=lista;
    }
    verificarListaVacia(){
        let mensaje="No se tiene ejercicios disponibles"
        if(this.lista.length!=0) mensaje="La lista tiene ejercicios";
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

    buscarPorNombre(tituloEjercicio){
        let coincidencias=[];

        if(tituloEjercicio==""){
            coincidencias= this.lista;
        }
        else{
         coincidencias=this.lista.filter(ejercicio=>ejercicio.getTitulo()==tituloEjercicio);
        }
        
        return coincidencias;
    }
    buscarPorEstado(estadoBus){
        let coincidencias=[];
        coincidencias= this.lista.filter(ejercicio=>ejercicio.getEstado()==estadoBus);
     return coincidencias;
      }

};
export {Catalogo};