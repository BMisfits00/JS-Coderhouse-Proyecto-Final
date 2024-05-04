let sistema = new Sistema();
let usuarioActivo = '';

let formularioLogin = document.querySelector('#formularioLogin');
let formularioGastos = document.querySelector('#formularioGastos');
let p = document.querySelector('p');

document.getElementById('ingresar').addEventListener('click', (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value
    let pass = document.querySelector('#pass').value

    if (usuarioValido(nombre, pass)) {
        let usuario = buscarUsuario(nombre, pass);
        if (usuario.length > 0 && usuario[0].pass === pass) {
            Swal.fire({
                title: `Bienvenido ${nombre}!`,
                text: "Ya podes empezar a cargar los gastos",
                icon: "success"
              });
            p.innerHTML = `usuario activo: ${nombre}`;
            usuarioActivo = nombre;
            p.style.display = '';

            document.getElementById('formularioGastos').style.display = '';
            document.getElementById('formularioLogin').style.display = 'none';
        } else {
            usuarioActivo = '';
            p.style.display = 'none';
        }
    } else {
        p.style.display = 'none';
        Swal.fire({
            icon: "error",
            title: "Usuario Incorrecto",
            text: "Intente de nuevo",
          });
    }

    document.querySelector('#nombre').value = ''
    document.querySelector('#pass').value = ''

})

document.getElementById('crearUsuario').addEventListener('click', (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value
    let pass = document.querySelector('#pass').value

    if (usuarioValido(nombre, pass)) {
        const usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
        if (usuariosStorage.filter((usuario) => usuario.nombre == nombre).length == 0){
            const usuariosLS = JSON.parse(localStorage.getItem('usuarios'));
            usuariosLS.push(new Usuario(nombre, pass));
            localStorage.setItem(`usuarios`, JSON.stringify(usuariosLS));
            let p = document.querySelector('p');
            p.innerHTML = `Usuario creado: ${nombre}, contraseña: ${pass}`;
        }
    }

    document.querySelector('#nombre').value = ''
    document.querySelector('#pass').value = ''

    console.log(JSON.parse(localStorage.getItem('usuarios')))
})

document.getElementById('cerrarSesion').onclick = () => {
    Swal.fire({
        // title: "Esta seguro que quiere cerrar sesion?",
        text: "Esta seguro que quiere cerrar sesion?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Hasta la vista, Baby",
            // text: "Your file has been deleted.",
            icon: "success"
        });
        formularioGastos.style.display = "none";
        formularioLogin.style.display = "";
        p.style.display = 'none';
        }
      });
}

function usuarioValido(nombre, pass){
    let valido = true;
    if (!nombre || !pass){
        valido = false;
    }
    return valido;
}

function buscarUsuario(nombre){
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
    return usuariosStorage.filter((usuario) => usuario.nombre == nombre);
}