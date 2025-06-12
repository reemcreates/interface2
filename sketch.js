// Arrays to hold random x and y positions for the words
let randomX = [];
let randomY = [];
let clickCheck = [];
let justClicked = false;
let submitbutton;
// List of text strings to display
let txts = [
  'an oopsie','weird','mood','health','conflict','finance','coding','worry','career','exhausted',
  'plant','stress','gift','education','bodyimage','procrastination','motivation',
  'divorce','grief','crisis','severe','trivial','depression','cold','alone',
  'truth','hope','googoogaga','overwhelming','neverending','stupid',
  'one of a kind','painful','budgeting','stop','run','still','fear','break','wish',
  'ending','starting','on hold','mysterious','vibes','ghosting','betrayal',
  'conflicted','passive','error','time management','chaos','uncanny',
  'am i cooked','lopsided','delusional','unwarranted','unhinged','shady','crisis',
  'meltdown','resentment','triggered','mundane','we','dont','really','care',
  'abt','your','bs','misunderstood',
  'JustAsking','uncertain','messy','idontknow','howto',
  'extraordinary','quickfix','easy',
  'closed','gone','smile','fake','truth', 'lie','gone','now','past','future',
  'noise','calm','storm','mood','lost','found','move','stop','wait','gone',
  'bleed','scream','hope','memory','alone','wish','risk','trust','cut','heal',
  'blank','feel','void','watch','breathe','choke','hope','slow','fast','gone'
];


let txtAmount;
let area = 150; // Max range of movement for floating effect

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  txtAmount = txts.length;

  let marginX = width * 0.25;
  let marginY = height * 0.25;

  // Generate random positions for each text
  for (let i = 0; i < txtAmount; i++) {
    let valueX = int(random(0, width));
    let valueY = int(random(0, height));

    // Skip this point if it's within the center margin
    if (valueX > width / 2 - marginX && valueX < width / 2 + marginX &&
        valueY > height / 2 - marginY && valueY < height / 2 + marginY) {
      i--;      // Retry this index
      continue; // Skip the rest of this iteration
    }

    // Save the accepted position
    randomX.push(valueX);
    randomY.push(valueY);
    
    clickCheck.push(false);
  }
  submitbutton=createButton('Submit')
  submitbutton.position(windowWidth/2,windowHeight/2)
  submitbutton.mousePressed(onSubmit);
  submitbutton.hide();
}

function draw() {
  background(0); // Black background
  let selectedtxt= clickCheck.filter(Boolean).length
  
  if (selectedtxt >= 3){
     submitbutton.show();
     }
  else{submitbutton.hide();
      }
  
  // Draw each word at its respective floating position
  for (let i = 0; i < txtAmount; i++) {
    floatingText(randomX[i], randomY[i], txts[i],clickCheck[i],i);
  }
}

// Function to draw text that floats using Perlin noise
function floatingText(startX, startY, txt,clicked,index) {
  // White text
  

  // Use noise to generate smooth movement
  let tx = noise(startX * 0.01, frameCount * 0.005) * area - area / 2;
  let ty = noise(startY * 0.01, frameCount * 0.005 + 1000) * area - area / 2;
  let dis = dist(mouseX,mouseY,tx+startX,ty+startY)
  let circsize = 20

  
noStroke()
  
   if(clicked){ 
     textSize(270)
   }else{
    textSize(12);
  }
  


if(dis<circsize/2){
 if(mouseIsPressed){
    clickCheck[index]=true;
 }
 textSize(270)
 circsize=100
    
}
 
  
   fill(255,20);
  circle(tx+startX,ty+startY,circsize);
   fill(255);
  text(txt, tx + startX, ty + startY);
  
  textAlign(CENTER,CENTER)
  textSize(30)
  text('Describe your problem in 3 words', windowWidth/2, windowHeight/2.5)
  
 
      
  //if (selectedtxt.length===3){
   // submitbutton.show();
 // } 
 // else {
   // submitbutton.hide
//  }
//justClicked = false;
}
function onSubmit() {
  console.log('Submitted categories:', selectedtxt);}
