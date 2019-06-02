function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,200,255);
  for(let i = 0;i < 10;i++) {
   for(let j = 0;j < 3;j++) {
     rect(i*40,j*40+280,40,40);
   }
  }
}
