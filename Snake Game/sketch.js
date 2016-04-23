//updated code
var s;
var steps = 20; //grid for background

function setup() {
  createCanvas(600,600);
  s = new Snake();
  frameRate= 2;
}

function draw() {
  background(51);
  s.update();
  s.show();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  }
  else if (keyCode === DOWN_ARROW){
  s.dir(0,1);
  }
  else if (keyCode === RIGHT_ARROW){
  s.dir(1,0);
  }
  else if (keyCode === LEFT_ARROW){
  s.dir(-1,0);
  }
}



