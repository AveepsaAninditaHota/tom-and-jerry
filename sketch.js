var mouse , mouseImg1 , mouseImg2 , mouseImg3 , mouseImg4;
var cat , catImg;
var bg,bgImg

function preload() {
    mouseImg1 =loadAnimation("mouse1.png");
    mouseImg2 =loadAnimation("mouse2.png");
    mouseImg3 =loadAnimation("mouse3.png");
    mouseImg4 =loadAnimation("mouse4.png");
    catImg =loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    bgImage=loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(700,500,50,50);
    mouse.addAnimation("mouseHappy", mouseImg1);

    cat = createSprite(800,600,50,50);
    cat.addAnimation("cat",catImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function  keyPressed(){

   

  if(keycode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg3);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg3);
      mouse.changeAnimation("mousingTeasing");
      mouse.frameDelay =25;
  }


}
