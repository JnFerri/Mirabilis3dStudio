
var load = document.getElementById("preloader")

var conteudo = document.getElementById("conteudo")

var video = document.getElementById("video")

setTimeout(function loading() {

    load.innerHTML = ""
    conteudo.style.visibility = "visible"
video.play()
}, 6500)