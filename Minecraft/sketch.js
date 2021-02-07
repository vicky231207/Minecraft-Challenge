let pos;
let scl = 40;
function setup() { 
  createCanvas(600, 400,WEBGL); 
  pos = createVector();
  frameRate(5);
} 
function draw() { 
  background(0,200,255); 
  translate(-200,-200,-200); 
  pos.y = 240
  if(keyIsPressed) {
   if(key == 'a') {
     pos.x -= scl;
   }
    if(key == 'd') {
     pos.x += scl; 
    }
    if(key == 'w') {
     pos.z -= scl; 
    }
    if(key == 's') {
      pos.z += scl;
    }
  }
  push();
  translate(pos);
  box(scl);
  pop();
  for(let i = 0;i < 10;i++) { 
    for(let j = 0;j < 3;j++) { 
      for(let k = 0;k < 10;k++) { 
        push(); 
        translate(i*scl,j*scl+280,k*scl); 
        box(scl); 
        pop(); 
      } 
    } 
  } 
}
