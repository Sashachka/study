//function LayersTool(backgroundLayer, drawingLayer) {
//    //background layer = canvas
//    this.name = "layersTool";
//    this.icon = "assets/layer.png";
//    
//    this.backgroundLayer = backgroundLayer; // Reference to the background layer
//    this.drawingLayer = drawingLayer; // Reference to the drawing layer
//   
//    this.currentLayer = this.drawingLayer; // Default to drawing on the drawing layer
//    this.populateOptions = function () {
//    this.brushSizeSlider = createSlider(1, 50, 10);
//    this.brushSizeSlider.parent(sizeOfStarControl);
//
//    this.selectButton = createButton('Switch to Red Brush');
//    this.selectButton.parent(numberOfStarsControl);
//    alert("to change from one layer to another press 1 for background, and 2 for layer above");
//
//    this.currentColor = color(0); // Default color is black
//
//    // Toggle brush color
//    this.selectButton.mouseClicked(() => {
//        if (this.currentColor.levels[0] === 0) {
//            this.currentColor = color(255, 0, 0); // Red
//            this.selectButton.html('Switch to Black Brush');
//        } else {
//            this.currentColor = color(0); // Black
//            this.selectButton.html('Switch to Red Brush');
//           
//        }
//    });
//};
//    // Draw function
//    this.draw = function () {
//        //clear();
//        image(this.backgroundLayer, 0, 0); // Draw the background layer
//        image(this.drawingLayer, 0, 0); // Draw the transparent drawing layer
//
//        // Display brush size
//        noStroke();
//        fill(0);
//        
//        
//        
//        if (mouseIsPressed && mousePressOnCanvas()) {
//            let brushSize = this.brushSizeSlider.value();
//            this.currentLayer.noStroke();
//            this.currentLayer.fill(this.currentColor);
//            this.currentLayer.ellipse(mouseX, mouseY, brushSize, brushSize);
//        }
//        
//            // Switch between layers using keys
//    
//        if (keyIsPressed&&key === '1') {
//            this.currentLayer = this.backgroundLayer;
//            console.log("Switched to background layer");
//           
//        } else if (keyIsPressed&&key === '2') {
//            this.currentLayer = this.drawingLayer;
//            console.log("Switched to drawing layer");
//            
//        }
//    
//    
//    };
//    
//    this.unselectTool = function () {
//        updatePixels();
//        select("#sizeOfStarControl").html(""); 
//        select("#numberOfStarsControl").html("");
//    };
//
//}
