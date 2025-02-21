//it is easier just to delete it but guess for a moment we will keep it. 
// don't know what to do with that nothing works?????
function EraserTool() {
    this.icon = 'assets/eraser.jpg';
    this.name = 'eraserTool';

    let ellipseSizeSlider;

    this.populateOptions = function () {
        select("#sizeOfStarControl").html("Size of Eraser: ");
        ellipseSizeSlider = createSlider(1, 50, 10);
        ellipseSizeSlider.parent("sizeOfStarControl");
    };

    this.draw = function (layer) {
        if (mousePressOnCanvas() && mouseIsPressed) {
            let ellipseSize = ellipseSizeSlider.value();

            // Create a temporary mask layer
            let maskLayer = currentLayer;
            maskLayer.clear();
            maskLayer.ellipse(mouseX, mouseY, ellipseSize, ellipseSize);

            // Apply the mask to erase pixels
            layer.loadPixels();
            maskLayer.loadPixels();

            for (let x = 0; x < layer.width; x++) {
                for (let y = 0; y < layer.height; y++) {
                    let index = (x + y * layer.width) * 4;
                    if (maskLayer.pixels[index + 3] > 0) { // Check if mask is applied
                        layer.pixels[index + 3] = 0; // Make transparent
                    }
                }
            }

            layer.updatePixels();
            console.log("Erasing at", mouseX, mouseY);
        }
    };

    this.unselectTool = function () {
        select("#sizeOfStarControl").html("");
    };
}


//function EraserTool() {
//    this.icon = 'assets/eraser.jpg';
//    this.name = 'eraserTool';
//
//    let ellipseSizeSlider;
//
//    this.populateOptions = function () {
//        select("#sizeOfStarControl").html("Size of Eraser: ");
//        ellipseSizeSlider = createSlider(1, 50, 10);
//        ellipseSizeSlider.parent("sizeOfStarControl");
//    };
//
//    this.draw = function (layer) {
//        if (mousePressOnCanvas() && mouseIsPressed) {
//            let ellipseSize = ellipseSizeSlider.value();
//
//            layer.erase(); // Start erasing
//            layer.noStroke();
//            layer.ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
//            layer.noErase(); // Stop erasing
//
//            console.log("Erasing at", mouseX, mouseY);
//        }
//    };
//
//    this.unselectTool = function () {
//        select("#sizeOfStarControl").html("");
//    };
//}


//erase function doesn't work with createGraphics so for a moment it will be like this.in comment section not working code but with erase function( basicly works without createGraphic thing)
//function EraserTool() {
//    this.icon = 'assets/eraser.jpg';
//    this.name = 'eraserTool';
//    
//    var ellipseSizeSlider = createSlider(1, 50, 10);
//   
//    this.draw = function(layer) {
//       
//
//        if (mousePressOnCanvas() && mouseIsPressed) {
//            var ellipseSize = ellipseSizeSlider.value();
//            layer.fill(255,200);  // Fully white fill (simulating erasure)
//            layer.noStroke();
//            layer.ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
//            console.log("Erasing...");
//        }
//    }; 
//
//   
//    this.unselectTool = function() {
//        select("#sizeOfStarControl").html("");
//    };
//
//    this.populateOptions = function() {
//        select("#sizeOfStarControl").html("Size of Eraser: ");
//        ellipseSizeSlider.parent("sizeOfStarControl");
//    };
//}

////not how it should be in perfect variant but since i don't have layers and background is white it's working.
////erase p5.js doesn't work as it can't work with create graphic...
//function EraserTool() {
//    
//    this.icon='assets/eraser.jpg';
//    this.name = 'eraserTool';
//      var ellipseSizeSlider = createSlider(1,50,10);
//   
//    this.draw = function (layer) {
//        if (mousePressOnCanvas() && mouseIsPressed) {
//            if (layer === backgroundLayer) {
//                var ellipseSize = ellipseSizeSlider.value();
//              // erase(255);
//             layer.fill(255);  // Transparent fill (255 for white, 0 for alpha)
//            layer.noStroke();
//                layer.ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
//             // noErase();
//            console.log("erase");
//            }
//        if (layer !== backgroundLayer){
//            alert("Unfortunately, erasor tool works only on background layer. Before hand switch layers.");
//            layer = backgroundLayer;
//            return;
//        }}
//            loadPixels();
//        return;
//    };
//
//     this.unselectTool = function () {
//        updatePixels();
//        
//        select("#sizeOfStarControl").html("");
//    };
//
//    this.populateOptions = function () {
//        
//       select("#sizeOfStarControl").html("Size of Eraser: ");
//        ellipseSizeSlider.parent("sizeOfStarControl");
//    };
// 
//}


