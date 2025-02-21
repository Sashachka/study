function ChooseShapeTool()
{
    this.name = 'chooseShapeTool';
    this.icon='assets/chooseShape.jpg';
    
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false; 
    var isFillActive = true;
    var chooseShape =true;
    
    this.draw = function(){
    if (chooseShape) {
        this.drawEllipse();
    } else {
        this.drawRect();
    }
    };
    this.drawEllipse = function()
    {
        // Apply fill and stroke colors
                if (isFillActive) {
                    fill(myColor);
                } else {
                    noFill();
                }
                stroke(myColor);
        
        if (mousePressOnCanvas() && mouseIsPressed) {
            if (startMouseX == -1) {
                // Capture the current state of the canvas 
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing =  true;
                loadPixels(); 
            }  
            else {
                // Update the preview while drawing & restore the previous canvas state before drawing a new preview
                updatePixels(); 
                let width = mouseX - startMouseX;
                let height = mouseY - startMouseY;
               
                ellipse(startMouseX, startMouseY, width, height);
            }
        } 
        else if (drawing) {
            // When the mouse is released, finalize the ellipse
            drawing = false;
            let width = mouseX - startMouseX;
            let height = mouseY - startMouseY;
            
            ellipse(startMouseX, startMouseY, width, height);
            startMouseX = -1;
            startMouseY = -1;
        }
    };
    
    this.drawRect = function(){
        // Apply fill and stroke colors
                if (isFillActive) {
                    fill(myColor);
                } else {
                    noFill();
                }
                stroke(myColor);
        
        if (mousePressOnCanvas() && mouseIsPressed) {
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing =  true;
                loadPixels(); 
            } 
            else {
                updatePixels(); 
                let width = mouseX - startMouseX;
                let height = mouseY - startMouseY;
               
                rect(startMouseX, startMouseY, width, height);
            }
        } 
        else if (drawing) {
            drawing = false;
            let width = mouseX - startMouseX;
            let height = mouseY - startMouseY;
            
            rect(startMouseX, startMouseY, width, height);
            startMouseX = -1;
            startMouseY = -1;
        }
    };
        
    
    this.unselectTool = function () {
        updatePixels();
        
        select("#sizeOfStarControl").html("");
        select("#4thOption").html("");
    };

    this.populateOptions = function () {
        let fillButton = createButton("Unfill");
        fillButton.parent("#sizeOfStarControl");
       
        fillButton.mouseClicked(function () {
            isFillActive = !isFillActive;
            fillButton.html(isFillActive ? "Unfill (filling)" : "Fill (not filling)");
        });
        
   let chooseButton = createButton("Ellipse");
chooseButton.parent("#4thOption");
chooseButton.position(450, 665);
chooseButton.mouseClicked(() => { 
    if (chooseShape) {
        //for ellipse
        chooseShape = false;
        this.drawEllipse(); 
        chooseButton.html("Rect");
    } else {
        //for rectangle
        chooseShape = true;
        this.drawRect(); 
        chooseButton.html("Ellipse");
    }
});
        
    };
  
}