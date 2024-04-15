class Sistema {
    constructor(){
        this.usuarios = [
            new Persona('Martin'),
            new Persona('Kevin'),
            new Persona('Brian')
        ];
    }

    agregarGasto(usuarioActual){
        let sigueCargando = confirm("¿Desea cargar algun gasto?");
        while(sigueCargando) {
            let mes = prompt("Ingrese el mes: ");
            this.ingresarMonto(mes, usuarioActual);
            sigueCargando = confirm("¿Desea cargar algun gasto?");
        }
    }

    ingresarMonto(mes, usuarioActual){
        let gasto = parseFloat(prompt("Ingrese su gasto: "));
    
        if(!isNaN(gasto) && gasto >= 0 && mes >= 1 && mes <= 12){
            usuarioActual.sumarGasto(gasto, mes);
            document.write("<h3> - Gasto ingresado en el mes de " + usuarioActual.buscarMes(mes) + ": $" + gasto);
        } else {
            alert("Valor incorrecto");
        }
    }

    consultarMes(usuarioActual){
        let sigueCargando;
        do {
            let mes = prompt("Ingrese el nombre del mes: ");
            document.write("<h3> Usuario: " + usuarioActual.nombre + " - Gasto total de " + usuarioActual.buscarMes(mes) + ": $" + usuarioActual.consultarMontoMes(mes));
            sigueCargando = confirm("¿Desea consultar otro mes?");
        } while (sigueCargando);
    }

    ingresar_usuario(){
        let nombre = prompt("Ingrese su nombre: ");
        let usuario = this.usuarios.find((elm) => elm.nombre == nombre);

        if (usuario == undefined) {
            if(confirm('Ese usuario no existe. ¿Desea registrarse?')){
                usuario = this.registrar_usuario(nombre);
            }
        }
        return usuario;
    }

    registrar_usuario(nombre){
        let persona = new Persona(nombre);
        this.usuarios.push(persona);
        return persona;
    }
    
    gastosTotalesUsuario(usuario){
        return usuario.gastosTotales();
    }

    totalusuarios(){
        this.usuarios.forEach(element => {
            document.write("<br><h3>Monto gastado en el año por " + element.nombre + ": $" + element.gastosTotales());
        });
    }
}