let imagens = []
let qntImagem = 15
for(a=1; a < qntImagem; a++){
    let frame = `assets/imagens/imagens/frame (${a}).jpg`
    imagens.push(frame)
}
console.log(imagens)
let n = 0
let localPost = document.getElementById('imagemPortifolio')
localPost.innerHTML = `<img src='${imagens[n]}'></img>`
function seguinte(){
    n++
    if(n > (imagens.length -1)){
        n = 0}
    localPost.innerHTML = `<img src='${imagens[n]}'></img>`
    
    }
    
function anterior(){
    
    n--
    if(n < 0){
        n = imagens.length - 1}
    localPost.innerHTML = `<img src='${imagens[n]}'></img>`
    
}
    



let videos = []
let qntVideos = 7
for(a=1; a < qntVideos; a++){
    let video = `assets/imagens/videos/video (${a}).mp4`
    videos.push(video)
}

let v = 0
let localPostVideo = document.getElementById('videoPortifolio')
localPostVideo.innerHTML = `<video src='${videos[v]}' controls></video>`
function seguinteVideo(){
    v++
    localPostVideo.innerHTML =''
    if(v > (videos.length -1)){
        v = 0}
    localPostVideo.innerHTML = `<video src='${videos[v]}' controls></img>`
    
    }
    
function anteriorVideo(){
    
    v--
    localPostVideo.innerHTML =''
    if(v < 0){
        v = videos.length - 1}
    localPostVideo.innerHTML = `<video src='${videos[v]}' controls></img>`
    
}

