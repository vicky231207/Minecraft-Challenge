function setup() { 
  createCanvas(400, 400,WEBGL); 
} 
function draw() { 
  console.log("hallo victor");
  background(0,200,255); 
  translate(-200,-200,-200); 
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
