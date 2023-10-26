class Ejercicio{
    constructor(titulo="",categoria="",estado="",imagen="1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph",resumen=""){
        this.titulo=titulo;
        this.categoria=categoria;
        this.estado=estado;
        this.imagen=imagen;
        this.resumen=resumen;
    }
    getTitulo(){
        return this.titulo;
    }
    getEstado(){
        return this.estado;
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
    validarEstado(){
        return this.estado !="";
    }
    validarTitulo(){
        return this.titulo != "";
    }
    validarCategoria(){
      return this.categoria !="";
    }
    validarResumen(){
        return this.resumen !="";
    }
    validarAtributos(){
        return this.validarTitulo() && this.validarCategoria() && this.validarResumen() && this.validarEstado();
    }
}
export  {Ejercicio};