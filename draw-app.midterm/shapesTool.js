function ShapesTool(){
this.name = 'shapesTool';
this.icon = 'assets/line.jpg';
    
 var canvas;

var editButton;
var finishButton;

var editMode = false;
    
var currentShape=[];
noFill();
this.setup= function() {
	//canvas = createCanvas(800, 800);
	//background(200);
	noFill();
	loadPixels();//saves background to call it everytime i draw something else
	
}; 

   // Clear Button handler 
    select("#clearButton").mouseClicked(function() {
        currentShape = []; //shapes data
    });

this.draw = function() {
	updatePixels();
    noFill();
	if(mousePressOnCanvas() && mouseIsPressed)
		{
			if(!editMode){
			currentShape.push({
				x: mouseX,
				y: mouseY
			});
			}
			else{
				for(let i = 0; i < currentShape.length; i++)
					{
						if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY)<15)
							{
								currentShape[i].x = mouseX;
								currentShape[i].y = mouseY;
							}
					}
			} 
		}
	
	beginShape();
	for(let i = 0; i < currentShape.length; i++)
		{
			vertex(currentShape[i].x, currentShape[i].y);
			if(editMode){
				fill('red');
				ellipse(currentShape[i].x, currentShape[i].y, 5);
				noFill();
			}
		}
	endShape();
};
    //for appering disapering buttons
    
    this.unselectTool = function() {
        updatePixels();
        select("#sizeOfStarControl").html("");
        select("#numberOfStarsControl").html("");
    };
    
    
    this.populateOptions = function() {
    
        select("#sizeOfStarControl").html(
            "<button id='editButton'>Edit Shape</button>"
        );
        
        select("#editButton").mouseClicked(function() {
            var button = select("#" + this.elt.id);
            if(editMode){
			editMode = false;
			button.html("edit Shape");
		}
		else{
			editMode = true;
			button.html("add vertices");
		}
    });  
        
        select("#numberOfStarsControl").html(
            "<button id='finishButton'>Finish Shape</button>"
        );
        select("#finishButton").mouseClicked(function() {
            var button = select("#" + this.elt.id);
           editMode = false;
		draw();
		loadPixels();
		currentShape=[];
            button.html("finish shape");
		}
    );
    };

}