song=""
function setup() {
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
video.hide()
}
function draw() {
    image(video,0,0,600,500)
}
function preload(params) {
    song=loadSound("music.mp3")
}
function play(params) {
    song.play()

}