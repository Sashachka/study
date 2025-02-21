var toolbox = null;
var helpers = null;
var myColor = '#000000';
var gui;

//let backgroundLayer; // The base layer with a white background
//let drawingLayer; // The transparent drawing layer
//let currentLayer; // The layer currently being drawn on


function setup() {
	// Create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	canvas = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	canvas.parent("content");
	
	const backgroundLayer = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    backgroundLayer.clear(); // Clear background (transparent)
    const drawingLayer = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    drawingLayer.clear(); // Clear drawing layer (transparent)
	
	//added
	this.backgroundLayer = backgroundLayer; // Reference to the background layer
    this.drawingLayer = drawingLayer; // Reference to the drawing layer
    this.currentLayer = this.drawingLayer; // Default to drawing on the drawing layer
	
	background(255);

	// Create helper functions
	helpers = new HelperFunctions();

	// Create a toolbox for storing the tools
	toolbox = new Toolbox();

	// Add the tools to the toolbox
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new StarTool());
	toolbox.addTool(new FlowerTool());
	toolbox.addTool(new Treev1Tool());
	toolbox.addTool(new TreeTool());
	toolbox.addTool(new BeeTool());
	toolbox.addTool(new ShapesTool());
	toolbox.addTool(new ChooseShapeTool());
	toolbox.addTool(new CutTool(canvas));
	toolbox.addTool(new LayersTool(backgroundLayer, drawingLayer));

	// GUI setup
	gui = createGui('Colour');
	gui.addGlobals('myColor');
	gui.setPosition(outerWidth / 50, outerHeight / 1.2);
}

function draw() {
	
	// Call the draw function from the selected tool
	if (toolbox.selectedTool && toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	}
	
	//added
	image(this.backgroundLayer, 0, 0); // Draw the background layer
    image(this.drawingLayer, 0, 0); // Draw the transparent drawing layer

	// Set the fill or stroke to use the updated color
	fill(myColor);
	stroke(myColor);
	
	//added can be a lot of problems
	if (mouseIsPressed && mousePressOnCanvas()) {
            //let brushSize = this.brushSizeSlider.value();
            this.currentLayer.stroke(myColor);//not work
            this.currentLayer.fill(myColor);//doesn;t work
            //this.currentLayer.toolbox.selectedTool.draw();
        }
	
	 if (keyIsPressed&&key === '1') {
            this.currentLayer = this.backgroundLayer;
            console.log("Switched to background layer");
           
        } else if (keyIsPressed&&key === '2') {
            this.currentLayer = this.drawingLayer;
            console.log("Switched to drawing layer");
            
        }
	
}



function mousePressOnCanvas() {
	return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
	
}
