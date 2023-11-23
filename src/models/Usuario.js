class Usuario{
    constructor(nombre="", password="") {
        this.nombre = nombre;
        this.password = password;
    }
        getNombre(){
            return this.nombre;
        }
        getPassword(){
            return this.password;
        }
        validarNombre(){
            return this.nombre!="";
        }
        validarPassword(){
            return this.password!="";
        }
        validarCampos(){
            return this.validarNombre() && this.validarPassword();
        }
        EsPredeterminado(){
            return false;
        }
  };
  export{Usuario};

