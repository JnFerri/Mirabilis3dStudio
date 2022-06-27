
document.onload = loadingFull()
var load = document.getElementById("preloader")
var conteudo = document.getElementById("conteudo")

function loadingFull(){
setTimeout(function loading() {
    load.innerHTML = ""
    conteudo.style.visibility = "visible"
}, 3000)}

