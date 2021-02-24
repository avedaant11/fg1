var ground,groundImg;
var ball,ballImg;
var messi, messiImg;
var ronaldo, ronaldoImg;

function preload(){
  groundImg=loadImage("images/ground.jpg");
  ballImg=loadImage("images/football.png");
  messiImg=loadImage("images/messi.png");
  ronaldoImg=loadImage("images/ronaldo.png");

}

function setup() {
  createCanvas(1000,700);

  //creating Football
  ball=createSprite(500, 350,20,20);
  ball.addImage(ballImg);
  ball.scale=0.1;
ball.debug=true;
  ball.setCollider("circle",0,0,190);


// creating team barca (red)
messi=createSprite(350,350,70,70);
messi.addImage(messiImg);
messi.scale=0.25;
messi.debug=true;
messi.setCollider("circle",0,0,70);

// creating team juventus
ronaldo=createSprite(650,350,70,70);
ronaldo.addImage(ronaldoImg);
ronaldo.scale=0.3;
ronaldo.debug=true;
ronaldo.setCollider("circle",0,0,70);

}

function draw() {

  //creating EdgeSprites
  createEdgeSprites();

  //creating field
  background(groundImg);

//player and ball Movements
ronaldo.velocityX=0;
ronaldo.velocityY=0;
messi.velocityX=0;
messi.velocityY=0;
ball.velocityX=0;
ball.velocityY=0;

//Making sprites bounce the edges
 //ronaldo.bounceOff(topEdge);
//ball.bounceOff(topEdge);
//messi.bounceOff(topEdge);

if(keyCode===16 && messi.isTouching(ball) ){
 console.log("working with code")
  ball.velocityX=3;

    }


  //moving messi
  if(keyDown("w")){
messi.y=messi.y-3;
  }
  if(keyDown("s")){
    messi.y=messi.y+3;
      }
      if(keyDown("a")){
        messi.x=messi.x-3;
          }
          if(keyDown("d")){
            messi.x=messi.x+3;
              }

//moving ronaldo
if(keyDown(UP_ARROW)){
  ronaldo.y=ronaldo.y-3;
    }
    if(keyDown(DOWN_ARROW)){
      ronaldo.y=ronaldo.y+3;
        }
        if(keyDown(LEFT_ARROW)){
          ronaldo.x=ronaldo.x-3;
            }
            if(keyDown(RIGHT_ARROW)){
              ronaldo.x=ronaldo.x+3;
                }

  //moving Ball
   //if(messi.isTouching(ball)&& messi.x<=450){
//ball.velocityX=1;
//ball.velocityY=1;
ball.bounceOff(ronaldo);
ball.bounceOff(messi);

messi.bounceOff(ronaldo);
ronaldo.bounceOff(messi);

drawSprites();

   }       
