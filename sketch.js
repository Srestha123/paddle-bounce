var ball,img1,paddle,img2,gameState,PLAY,END;
function preload() {
  img1=loadImage("paddle.png");
  img2=loadImage("ball.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  
  createCanvas(400, 400);
  paddle=createSprite(350,200,10,10);
  paddle.addImage("img8",img1);
  paddle.scale=0.8;
  ball=createSprite(320,200,10,10);
  ball.addImage("img7",img2);
  ball.scale=0.9;
  PLAY=0;
  END=1;
  gameState=PLAY;
 
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(0,78,925);
  if(gameState===PLAY){
    if(keyDown("UP_ARROW")){
  
  paddle.y = paddle.y - 20;   /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;/* what should happen when you press the UP Arrow Key */
  }
    
  }
  /* create Edge Sprites here */
  if (ball.x>400){
    gameState=END;
  }
  
  if(gameState===END){
    textSize(25);
    textFont("times new roman");
    
    text("YOU LOST!",110,200);
    text("press space to restart",110,225);
  }
  if(keyDown("space")&&gameState===END){
gameState=PLAY;
    ball.x=200;
    ball.y=200;
    ball.velocityX=7;
  }
    
edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  if(ball.bounceOff(paddle)){
    randomVelocity();
  }
  
  
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityX=random(-3,-12);
  ball.velocityY=random(-6,5);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
