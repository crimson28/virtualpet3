var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var backgroundImage;
var allPlayers;

var cars,car1,car2,car3,car4;
cars = [];

var car1_img, car2_img, car3_img, car4_img;
var ground_Img;
var track;
var xVel,yVel;

var oilSpillIMG;
var oilSpill;
var obstacleGroup;
var carSlidingSound;
var w,h;


function preload(){
    
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    ground_Img = loadImage("images/ground.png")
    track = loadImage("images/track.png");
    oilSpillIMG = loadImage("images/f1.png");

    carSlidingSound = loadSound("sound/sound_sliding.mp3");
    

}

function setup(){

    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    xVel = 0;
    yVel = 0;

    obstacleGroup = new Group();

    for(var i = 0; i < 5 ; i++){

        w = random(200,950);
        h = random(-height*4,height-300);

        oilSpill = createSprite(w,h);
        oilSpill.addImage(oilSpillIMG);

        obstacleGroup.add(oilSpill);

    }

    

    
}

function draw(){

    if(playerCount === 4){

        game.update(1);
    }

    if(gameState === 1){

        clear();
        game.play();
    }

    if(gameState === 2){

        game.end();
    }
   
}


