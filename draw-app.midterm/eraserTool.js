//not how it should be in perfect variant but since i don't have layers and background is white it's working.
function EraserTool() {
    
    this.icon='assets/eraser.jpg';
    this.name = 'eraserTool';
    
    var ellipseSizeSlider = createSlider(1,50,10);
   
    this.draw = function () {
        if (mousePressOnCanvas() && mouseIsPressed) {
            
                var ellipseSize = ellipseSizeSlider.value();
                erase(255);
                ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
                noErase();
            }
            loadPixels();
        
    };

     this.unselectTool = function () {
        updatePixels();
        
        select("#sizeOfStarControl").html("");
    };

    this.populateOptions = function () {
        
       select("#sizeOfStarControl").html("Size of Eraser: ");
        ellipseSizeSlider.parent("sizeOfStarControl");
    };
 
}


