
var load = document.getElementById("preloader")

var conteudo = document.getElementById("conteudo")

setTimeout(function loading() {

    load.innerHTML = ""

    conteudo.style.visibility = "visible"
}, 1500)