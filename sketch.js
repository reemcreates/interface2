let anton;
function preload() {
  anton=loadFont('Anton-Regular.ttf');
  submitSound=loadSound('yippee-147032.mp3')
}
// Arrays to hold random x and y positions for the words
let randomX = [];
let randomY = [];
let clickCheck = [];
let justClicked = false;
let selectedcategories= []
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
  'extraordinary','quickfix','easy','truth','hope','googoogaga','overwhelming','neverending','stupid',
  'one of a kind','painful','budgeting','stop','run','still','fear','break','wish',
  'ending','starting','on hold','mysterious','vibes','ghosting','betrayal',
  'conflicted','passive','error','time management','chaos','uncanny',
  'am i cooked','lopsided','delusional','unwarranted','unhinged','shady','crisis',
  'meltdown','resentment','triggered','mundane','an oopsie','weird','mood','health','conflict','finance','coding','worry','career','exhausted',
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
  'extraordinary','quickfix','easy','truth','hope','googoogaga','overwhelming','neverending','stupid',
  'one of a kind','painful','budgeting','stop','run','still','fear','break','wish',
  'ending','starting','on hold','mysterious','vibes','ghosting','betrayal',
  'conflicted','passive','error','time management','chaos','uncanny',
  'am i cooked','lopsided','delusional','unwarranted','unhinged','shady','crisis',
  'meltdown','resentment','triggered','mundane',


];

let submitted= false;
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
  submitbutton.style('width', '100px');
submitbutton.style('height','30px');
submitbutton.style('font-size','18px');
submitbutton.style('background-color','#054ff0');
submitbutton.style('color','#ececec');
submitbutton.style('border', '10'); // Optional: remove border
submitbutton.style('border', '#917aff')
submitbutton.style('border-radius','5px'); // Optional: rounded corners

  submitbutton.position(windowWidth/2- 50,windowHeight/2+50)
  submitbutton.hide();
  submitbutton.mousePressed(() => {
  submitted = true;
  submitbutton.hide(); // optional
    
     if (submitSound && !submitSound.isPlaying()) {
    submitSound.play();
     }
     setTimeout(() => {
    window.location.href = 'https://retxjz.github.io/screen3/';
  }, 1700);
});
}

function draw() {
  background('#f8f8f8') ;// Black background
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
  justClicked = false;
}

// Function to draw text that floats using Perlin noise
function floatingText(startX, startY, txt,clicked,index) {
  // White text
  

  // Use noise to generate smooth movement
  let tx = noise(startX * 0.01, frameCount * 0.02) * area - area / 2;
  let ty = noise(startY * 0.01, frameCount * 0.02 + 1000) * area - area / 2;
  let dis = dist(mouseX,mouseY,tx+startX,ty+startY)
  let circsize = 20;
  let hovered;

  
noStroke()
  
   if(clicked){ 
      textSize(270);
   
 circsize=100;
   }else{
    textSize(12);
    
  }
  

if(dis<circsize/2 && justClicked){ 
   clickCheck[index] = !clickCheck[index]; // Toggle selection
 textSize(270);
  
 circsize=100;
  print(clicked);
    
}
  if(dis<circsize/2){
    hovered = true;
  } else{
  hovered= false;
}
 
if(hovered == true){
   circsize=100;
  textSize(270);
 
}
  
  
   fill(255,0);
 // circle(tx+startX,ty+startY,circsize);
  // textFont('sans-serif')
 fill('#ececec')
  text(txt, tx + startX, ty + startY);

  
  textFont(anton)
  drawingContext.letterSpacing = '30px';
  textAlign(CENTER,CENTER)
  textSize(40)
  fill('#474747')
  text('DESCRIBE YOUR PROBLEM IN 3 WORDS', windowWidth/2, windowHeight/2.5)
   
 
  if (submitted) {
  fill('#F44336');
  //textFont('sans-serif');
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Submitted!', windowWidth / 2, windowHeight / 2);
}
      
  //if (selectedtxt.length===3){
   // submitbutton.show();
 // } 
 // else {
   // submitbutton.hide
//  }
//justClicked = false;
}

function mouseReleased() {
  justClicked = true;
}
//if(mouseIsPressed){//find the right condition
   // window.location.href = 'https://natcat01.github.io/logowanie-du-e-&#39'; //replace the link
 // }
