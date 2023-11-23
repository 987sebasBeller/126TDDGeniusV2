class Ejercicio{
    constructor(titulo="",categoria="",imagen="1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph",resumen="", detalle="",id=0,dificultad){
        this.titulo=titulo;
        this.categoria=categoria;
        this.imagen=imagen;
        this.resumen=resumen;
        this.detalle=detalle;
        this.id=id
        this.dificultad=dificultad;
    }
    getTitulo(){
        return this.titulo;
    }
    getCategoria(){
        return this.categoria;
    }
    getImagen(){
        return this.imagen;
    }
    getResumen(){
        return this.resumen;
    }
    getDetalle(){ 
        return this.detalle;
    }
    getId(){ 
        return this.id;
    }
    setId(id){ 
        this.id=id;
    }
    esDiferente(atributo,atributoAComparar){
            return atributo!=atributoAComparar;
    }
    validarTitulo(){
        return this.esDiferente(this.titulo,"");
    }
    validarCategoria(){
      return this.esDiferente(this.categoria,"");
    }
    validarResumen(){
        return this.esDiferente(this.resumen,"");
    }
    validarAtributos(){
        return this.validarTitulo() && this.validarCategoria() && this.validarResumen();
    }
    getDificultad(){
        return this.dificultad;
    }
    setTitulo(nuevoTitulo){
        this.titulo=nuevoTitulo ;
    }
    setCategoria(nuevaCategoria){
        this.categoria=nuevaCategoria;
    }
    setResumen(nuevoResumen){
        this.resumen=nuevoResumen;
    }
    

}
export  {Ejercicio};