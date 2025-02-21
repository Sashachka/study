function ChooseShapeTool() {
    this.name = 'chooseShapeTool';
    this.icon = 'assets/chooseShape.jpg';

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false; 
    var isFillActive = true;
    var chooseShape = true;
    //var myColor = 'black'; // Ensure myColor is defined

    this.draw = function(layer) {
        if (chooseShape) {
            this.drawEllipse(layer);
        } else {
            this.drawRect(layer);
        }
    };

    this.drawEllipse = function(layer) {
        if (!layer) return; // Prevents error if layer is undefined

        layer.stroke(myColor);
        if (isFillActive) {
            layer.fill(myColor);
        } else {
            layer.noFill();
        }

        if (mousePressOnCanvas() && mouseIsPressed) {
            if (startMouseX === -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                layer.loadPixels(); 
            } else {
                layer.updatePixels(); 
                let width = mouseX - startMouseX;
                let height = mouseY - startMouseY;
                layer.ellipse(startMouseX, startMouseY, width, height);
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    this.drawRect = function(layer) {
        if (!layer) return; // Prevents error if layer is undefined

        layer.stroke(myColor);
        if (isFillActive) {
            layer.fill(myColor);
        } else {
            layer.noFill();
        }

        if (mousePressOnCanvas() && mouseIsPressed) {
            if (startMouseX === -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                layer.loadPixels(); 
            } else {
                layer.updatePixels(); 
                let width = mouseX - startMouseX;
                let height = mouseY - startMouseY;
                layer.rect(startMouseX, startMouseY, width, height);
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    this.unselectTool = function() {
        updatePixels();
        select("#sizeOfStarControl").html("");
        select("#4thOption").html("");
    };

    this.populateOptions = function(layer) {
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
            chooseShape = !chooseShape;
            chooseButton.html(chooseShape ? "Ellipse" : "Rect");
        });
    };
}


//function ChooseShapeTool()
//{
//    this.name = 'chooseShapeTool';
//    this.icon='assets/chooseShape.jpg';
//    
//    var startMouseX = -1;
//    var startMouseY = -1;
//    var drawing = false; 
//    var isFillActive = true;
//    var chooseShape =true;
//    
//    this.draw = function(layer){
//    if (chooseShape) {
//        this.drawEllipse(layer);
//    } else {
//        this.drawRect(layer);
//    }
//    };
//    this.drawEllipse = function(layer)
//    {
//        // Apply fill and stroke colors
//                if (isFillActive) {
//                    layer.fill(myColor);
//                } else {
//                    layer.noFill();
//                }
//                layer.stroke(myColor);
//        
//        if (mousePressOnCanvas() && mouseIsPressed) {
//            if (startMouseX == -1) {
//                // Capture the current state of the canvas 
//                startMouseX = mouseX;
//                startMouseY = mouseY;
//                drawing =  true;
//                layer.loadPixels(); 
//            }  
//            else {
//                // Update the preview while drawing & restore the previous canvas state before drawing a new preview
//                layer.updatePixels(); 
//                let width = mouseX - startMouseX;
//                let height = mouseY - startMouseY;
//               
//                layer.ellipse(startMouseX, startMouseY, width, height);
//            }
//        } 
//        else if (drawing) {
//            // When the mouse is released, finalize the ellipse
//            drawing = false;
//            let width = mouseX - startMouseX;
//            let height = mouseY - startMouseY;
//            
//            //layer.ellipse(startMouseX, startMouseY, width, height);
//            startMouseX = -1;
//            startMouseY = -1;
//        }
//    };
//    
//    this.drawRect = function(layer){
//        // Apply fill and stroke colors
//                if (isFillActive) {
//                    layer.fill(myColor);
//                } else {
//                    layer.noFill();
//                }
//                layer.stroke(myColor);
//        
//        if (mousePressOnCanvas() && mouseIsPressed) {
//            if (startMouseX == -1) {
//                startMouseX = mouseX;
//                startMouseY = mouseY;
//                drawing =  true;
//                layer.loadPixels(); 
//            } 
//            else {
//                layer.updatePixels(); 
//                let width = mouseX - startMouseX;
//                let height = mouseY - startMouseY;
//               
//                layer.rect(startMouseX, startMouseY, width, height);
//            }
//        } 
//        else if (drawing) {
//            drawing = false;
//            let width = mouseX - startMouseX;
//            let height = mouseY - startMouseY;
//            
//            //layer.rect(startMouseX, startMouseY, width, height);
//            startMouseX = -1;
//            startMouseY = -1;
//        }
//    };
//        
//    
//    this.unselectTool = function () {
//        updatePixels();
//        
//        select("#sizeOfStarControl").html("");
//        select("#4thOption").html("");
//    };
//
//    this.populateOptions = function (layer) {
//        let fillButton = createButton("Unfill");
//        fillButton.parent("#sizeOfStarControl");
//       
//        fillButton.mouseClicked(function () {
//            isFillActive = !isFillActive;
//            fillButton.html(isFillActive ? "Unfill (filling)" : "Fill (not filling)");
//        });
//        
//   let chooseButton = createButton("Ellipse");
//chooseButton.parent("#4thOption");
//chooseButton.position(450, 665);
//chooseButton.mouseClicked(() => { 
//    if (chooseShape) {
//        //for ellipse
//        chooseShape = false;
//        this.drawEllipse(layer); 
//        chooseButton.html("Rect");
//    } else {
//        //for rectangle
//        chooseShape = true;
//        this.drawRect(layer); 
//        chooseButton.html("Ellipse");
//    }
//});
//        
//    };
//  
//}