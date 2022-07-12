

let imagens = []
let qntImagem = 15

for(a=1; a < qntImagem; a++){
    let frame = `assets/imagens/imagens/frame (${a}).jpg`
    imagens.push(frame)
    
}
console.log(imagens)

var localPostImagem = document.getElementById('imagemPortifolio')
function postarImagens(){
for(i=0; i<imagens.length; i++){
    localPostImagem.innerHTML += `<img class='img__portifolio' src='${imagens[i]}'>`
}
}
    

document.onload = postarImagens()



