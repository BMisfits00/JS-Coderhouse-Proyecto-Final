let numeroUsuario = 0;

class Sistema {
    constructor(){
        this.usuarios = [
            new Usuario('Brian', "123"), 
            new Usuario('Claudio', "321")
        ];
        inicializarALocalStorage(this.usuarios);
    }
}

function inicializarALocalStorage(usuarios){
    localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
}

function gastosTotales(){
    this.usuarios.forEach((element, valor) => {
        valor += element.gastosTotales();
    });
    return valor;
}

function buscarUsuario(nombre){
    return this.usuarios.includes(nombre);
}

function crearUsuario(nombre, pass) {
    return new Usuario(nombre, pass);
}