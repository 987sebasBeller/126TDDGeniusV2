import { Ejercicio } from "./Ejercicio";

class Catalogo{
    constructor(lista=[]){
        this.lista=lista;

        

    }
    guardarEjercicios(){
        const objetoJSON = JSON.stringify(this.lista);
        localStorage.setItem("listaEjercicios", objetoJSON);
    }
    verificarListaVacia(){
        let mensaje="No se tiene ejercicios disponibles"
        if(this.esListaVacia(this.lista)) mensaje="La lista tiene ejercicios";
        return mensaje;
    }
    getNPrimerosEjercicios(cantidad){
        return this.lista.slice(0,cantidad);
    }
    esListaVacia(lista){
        return lista.length!=0;
    }
    getEjercicios(){
        let ejercicios= JSON.parse(localStorage.getItem("listaEjercicios"));
        if(ejercicios) {
           ejercicios= this.convertirDeJsonAEjercicio(ejercicios);
            this.lista=ejercicios;
        }
        return this.lista;
    }
    agregarEjercicio(ejercicio){
        this.lista.push(ejercicio);
    }
    convertirDeJsonAEjercicio(listaJson){
        let listaEjercicios=[]
        listaJson.forEach((ejercicio) => {
            listaEjercicios.push(new Ejercicio(ejercicio.titulo,ejercicio.categoria,ejercicio.imagen,ejercicio.resumen,ejercicio.detalle,ejercicio.id,ejercicio.dificultad));
        });
        return listaEjercicios;
    }
    buscarPorNombre(tituloEjercicio){
        let coincidencias=[];

        if(tituloEjercicio==""){
            coincidencias= this.getEjercicios();
        }
        else{
         coincidencias=this.getEjercicios().filter(ejercicio=>ejercicio.getTitulo()==tituloEjercicio);
        }
        
        return coincidencias;
    }

    buscarEjerciosPorCategoria(categoria){
        let listaCoincidencias=[]
        this.lista.forEach((ejer) =>{
         if(ejer.getCategoria()==categoria){
            listaCoincidencias.push(ejer);
            }
        }
        );
        return listaCoincidencias;
    }


    buscarEjerciosPorDificultad(dificultad){
        let listaCoincidencias=[];
        this.lista.forEach((ejer) =>{
            if(ejer.getDificultad()==dificultad){
               listaCoincidencias.push(ejer);
               }
            }
            );
        return listaCoincidencias;
    }


};
export {Catalogo};