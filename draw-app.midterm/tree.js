
function TreeTool(){
    this.name = "treeTool";
    this.icon = "assets/tree.png";
    
    var tree = loadImage('assets/tree.png');
    
	var treeSizeSlider=createSlider(5, 50, 20);
	var ntreeSlider = createSlider(1, 20 ,5);

    
    this.draw = function() {
	
	if (mousePressOnCanvas()&&mouseIsPressed) {
		for(let i =0; i < ntreeSlider.value(); i++){
		var treeSize = treeSizeSlider.value(); 
		var treeX = random((mouseX - treeSize / 2) -20,(mouseX - treeSize / 2)+20);
		var treeY = random((mouseY - treeSize / 2)-20, (mouseY - treeSize / 2)+20) ;
		
        drawTree(treeX, treeY, treeSize);
		}
        loadPixels();
	}
}; 
     
     this.unselectTool = function() {
        updatePixels();
        select("#sizeOfStarControl").html(""); 
        select("#numberOfStarsControl").html("");
    };
    
    
    this.populateOptions = function() {
        select("#sizeOfStarControl").html("Size of tree: ");
	    treeSizeSlider.parent("sizeOfStarControl");
 
        select("#numberOfStarsControl").html("Number of tree: ");
        ntreeSlider.parent("numberOfStarsControl");
        
     };
    
    function drawTree(x, y, size) {
  // Draw tree trunk
  fill(139, 69, 19); 
  noStroke();
  rect(x - size / 8, y, size / 4, size / 3); 
  
  // Draw leaves
  fill(myColor); 
  
 ellipse(x + size / 20, y - size/1.6, size/2, size/2); //top
  ellipse(x - size/5, y- size/2.5, size/2, size/2);//2nd middle form bottom
  ellipse(x + size / 5, y- size/5, size/2, size/2);//1st middle from bottom
  ellipse(x - size / 5, y - size / 10, size/2, size/2);//bottom
  
} 
}