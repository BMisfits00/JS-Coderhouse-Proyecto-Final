// export default 
class Usuario {
    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;
        this.meses = [
            new Mes("Enero", 0),
            new Mes("Febrero", 0),
            new Mes("Marzo", 0),
            new Mes("Abril", 0),
            new Mes("Mayo", 0),
            new Mes("Junio", 0),
            new Mes("Julio", 0),
            new Mes("Agosto", 0),
            new Mes("Septiembre", 0),
            new Mes("Octubre", 0),
            new Mes("Noviembre", 0),
            new Mes("Diciembre", 0)
        ];
    }

    gastosTotales(){
        this.meses.forEach((element, monto) => {
            monto += element.monto;
        });
        return monto;
    }
}

