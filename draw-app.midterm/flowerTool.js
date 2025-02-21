function FlowerTool(){
    this.name = "flowerTool";
    this.icon = "assets/flower.png";
    
    var flower = loadImage('assets/flower.png');
    
	var flowerSizeSlider=createSlider(5, 50, 20);
	var nflowerSlider = createSlider(1, 20 ,5);
    var nFlowerPetalsSlider = createSlider(1, 10, 1);
    
    this.draw = function() {
	if (mousePressOnCanvas()&&mouseIsPressed) {
		for(let i =0; i < nflowerSlider.value(); i++){
		var flowerSize = flowerSizeSlider.value(); 
        var nPetals = nFlowerPetalsSlider.value();
		var flowerX = random((mouseX - flowerSize / 2) -20,(mouseX - flowerSize / 2)+20);
		var flowerY = random((mouseY - flowerSize / 2)-20, (mouseY - flowerSize / 2)+20) ;
        drawFlower(flowerX, flowerY, flowerSize, nPetals);
		}
        loadPixels();
	}
};
     
     this.unselectTool = function() {
        updatePixels();
        select("#sizeOfStarControl").html("");  
        select("#numberOfStarsControl").html("");
        select("#numbersOfPointsControl").html("");
    }; 
    
    
    this.populateOptions = function() {
        select("#sizeOfStarControl").html("Size of flower: ");
	    flowerSizeSlider.parent("sizeOfStarControl");
 
        select("#numberOfStarsControl").html("Number of flower: ");
        nflowerSlider.parent("numberOfStarsControl");
        
        select("#numbersOfPointsControl").html("Number of Petals: ");
        nFlowerPetalsSlider.parent("numbersOfPointsControl");
     };
    
    function drawFlower(x, y, size, petals) {
  noStroke();
  //draw stalk
  fill('green');
  rect(x-(size/6),y, size/4, size*2);
  noFill();
  
//color of petals
  fill(myColor); 
  
  // Draw circular petals
  for (let i = 0; i < petals; i++) {
    let angle = TWO_PI / petals * i;
    let petalX = x + cos(angle) * (size * 0.6);
    let petalY = y + sin(angle) * (size * 0.6);
    ellipse(petalX, petalY, size/1.2, size / 1.2);
  }
  
  // Draw center
  fill(255, 204, 0); 
  ellipse(x, y, size * 0.6, size * 0.6);
}
}