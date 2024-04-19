function habilitar(){
    var valor = document.getElementById('categoria').value
    valor > 0 ? 
    document.getElementById('divInvisible').style.display="block" :
    document.getElementById('divInvisible').style.display="none"
}