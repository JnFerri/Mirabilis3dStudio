

let videos = []
let qntVideos = 8
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
