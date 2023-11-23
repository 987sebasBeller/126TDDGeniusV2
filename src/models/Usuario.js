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
            return this.esDiferente(this.nombre,"");
        }
        validarPassword(){
            return this.esDiferente(this.password,"");
        }
        validarCampos(){
            return this.validarNombre() && this.validarPassword();
        }
        esDiferente(atributo,atributoAComparar){
                return atributo!=atributoAComparar
        }
        EsPredeterminado(){
            return this.nombre=="admin123" && this.password=="123";
        }
  };
  export{Usuario};

