let pos;

function setup() { 
  createCanvas(600, 400,WEBGL); 
  pos = createVector();
} 
function draw() { 
  background(0,200,255); 
  translate(-200,-200,-200); 
  pos.y = 240
  if(keyIsPressed) {
   if(key == 'a') {
     pos.x -= 1;
   }
    if(key == 'd') {
     pos.x += 1; 
    }
    if(key == 'w') {
     pos.z -= 1; 
    }
    if(key == 's') {
      pos.z += 1;
    }
  }
  push();
  translate(pos);
  box(40);
  pop();
  for(let i = 0;i < 10;i++) { 
    for(let j = 0;j < 3;j++) { 
      for(let k = 0;k < 10;k++) { 
        push(); 
        translate(i*40,j*40+280,k*40); 
        box(40); 
        pop(); 
      } 
    } 
  } 
}
