video = ""
function preload(){
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createVideo('Meteor_shower.mp4');
    
}

function draw() {
    image(video,0,0,640,420);
}