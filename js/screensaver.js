const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");
var x=0; 
var y=0;
var controlX=1;
var controlY=1;

const image = new Image();
function draw() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(image, x,y,200,84.52)

    if(x<= 0){
        controlX = 4;
    } 
    else if (x >= window.innerWidth-200){
        controlX = -4;
    }

    if(y<= 0){
        controlY = 3;
    } 
    else if (y >= window.innerHeight-84.52){
        controlY = -3;
    }

    x = x + controlX;
    y = y + controlY;

    window.requestAnimationFrame(draw);
}


image.src = "/assets/Logo.png";

window.requestAnimationFrame(draw);

var mousetimeout;
var screensaverIsActive = false;
var time = 5;
var screensaverId = document.getElementById("screensaver");

$(document).mousemove(function(){
    clearTimeout(mousetimeout);
    if(screensaverIsActive == true){
        stop_screensaver();
    }
    mousetimeout = setTimeout(show_screensaver, 1000*time);
})

function show_screensaver() {
    $("#screensaver").fadeIn();
    screensaverIsActive = true;
    screensaver_animation();
}

function screensaver_animation(){
    if (screensaverIsActive == true) {
        // canvas.style.display = "block";

      $("#screensaver").animate({
        backgroundColor: "rgb(12,12,12)"}, screensaver_animation);
    }
  }

  function stop_screensaver(){
    $("#screensaver").fadeOut();
    screensaverIsActive = false;
    // canvas.style.display = "none";
  }
