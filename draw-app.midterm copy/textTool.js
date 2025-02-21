
function TextTool(){
   
    this.icon = 'assets/eraser.jpg';
    this.name = 'textTool';
    
    let texts = [];
    let typing = false;
    let currentText = "hi";
    let textX, textY;
    
  // function draw() {
   this.draw = function(){
 // background(220);
  
  // Draw all previous texts
  for (let t of texts) {
    layer.text(t.text, t.x, t.y);
  }
  
  // Draw the current typing text
  if (typing) {
    layer.text(currentText + "|", textX, textY); // Cursor effect
  }
};

function mousePressed() {
  // Save previous text if typing was active
  if (typing && currentText !== "") {
    texts.push({ text: currentText, x: textX, y: textY });
  }
  
  // Set new text position
  textX = mouseX;
  textY = mouseY;
  currentText = "";
  typing = true;
}

function keyTyped() {
  if (typing) {
    currentText += key;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE && typing) {
    currentText = currentText.slice(0, -1);
  }
}
}