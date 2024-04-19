class Persona {
    constructor(nombre) {
        this.nombre = nombre;
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

    buscarMes(mes) {
        return this.meses[mes-1].mes;
    }

    consultarMontoMes(mes){
        return this.meses[mes-1].monto;
    }

    sumarGasto(monto, mes){
        this.meses[mes-1].monto += monto;
    }

    gastosTotales(){
        let total = this.meses.reduce((acumulador, mes) => acumulador + mes.monto, 0);
        return total;
    }
}