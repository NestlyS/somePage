
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeNorth.png";
pipeDown.src = "img/pipeSouth.png";


//Sounds

var fly = new Audio();
var score_audio = new Audio();

fly.src = "sounds/fly.mp3";
score_audio.src = "sounds/score.mp3";


var gap = 90;

//Foreground & Background
xBG = 0;
xFG = 0;

//Blocks

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
};


//Keypress

document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 40;
    
    fly.play();
}

var score = 0;
//Bird

var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw(){
    ctx.drawImage(bg, xBG,0);
    /*if(xBG > -288){
        --xBG;
    } else {
        xBG = 0;
    }*/
    for(var i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x , pipe[i].y);
        ctx.drawImage(pipeDown, pipe[i].x , pipe[i].y + pipeUp.height + gap); 
        pipe[i].x--;
        if(pipe[i].x == 100) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeUp.height) - pipeUp.height
            })
        }
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height || yPos <= 0){
            location.reload();
        }
        if(pipe[i].x == xPos){
            score++;
            score_audio.play();
        }
    }
    ctx.drawImage(fg, xFG,cvs.height - fg.height);
    if(xFG > -180){
        --xFG;
    } else {
        xFG = 0;
    }
    ctx.drawImage(bird, xPos,yPos, 38, 26);
    // Сохраняем настройки канваса до всяких манипуляций с ним
    
    
    yPos += grav;
    
    ctx.fillStyle = "#d6d694";
    ctx.fillRect(15, cvs.height-60, 100, 50);
    ctx.fillStyle = "#af7a39";
    ctx.font = "24px Impact";
    ctx.fillText("Score: " + score, 20, cvs.height-20);
    requestAnimationFrame(draw);
    
}


pipeDown.onload = draw;
/*
var imageName = new Image();
imageName.src = "images/bg.png";
var audioName = new Audio();
audioName.src = "audio/fly.mp3";
ctx.drawImage(imageName, 100, 150, 50, 50);*/
