const articulos = []

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let gasto = document.querySelector('#gasto').value
    let monto = document.querySelector('#monto').value
    localStorage.setItem(gasto, monto)

    document.querySelector('#gasto').value = '' //blanquea los inputs
    document.querySelector('#monto').value = ''
    console.log(localStorage)
})


