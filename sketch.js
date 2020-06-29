var car,cr,edges,carimg,crimg

function setup (){
canvas = createCanvas(500,500);
//carimg = loadImage("image/car.png");
car = createSprite(250,300,30,30)
//car.addImage("car1",carimg);
//crimg = loadImage("image/cr.png");




}

function draw(){
background("black");
edges = createEdgeSprites();

//car.bounceOff(edges);

c();

end();

drawSprites();

}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    car.setSpeed(10, 0);
  }
  else if (keyCode == LEFT_ARROW) {
    car.setSpeed(10, 180);
  }
}

function c(){

  if(frameCount% 60 === 0){
  cr = createSprite(100,0,30,40);
  //cr.addImage("cr.png,",crimg);
  cr.x = random(0,500);
  cr.velocityY = 10;
  

  }   
  
}

function end (){
if(cr.position.y>=car.position.y){
  textSize(20);
 fill("red");
  text("You Lose",250,250);
//car.destory();
//cr.destory();

}


}