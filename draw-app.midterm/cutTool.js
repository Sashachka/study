function CutTool(canvas){
    this.name = "сutTool";
    this.icon = "assets/cut.png";


    let ctx = canvas.canvas.getContext('2d', { willReadFrequently: true });
    console.log("Canvas Context Initialized:", ctx);

var selectMode = 0;
var selectedArea= {x: 0, y:0, w: 100, h: 100};

var selectButton;// = createButton('Select area');
this.populateOptions = function () {
        selectButton = createButton('Select area');
        selectButton.parent("#sizeOfStarControl");
 console.log("populate functionn works");
    
    selectButton.mouseClicked(function()
    {
        console.log("mousePressed work?");
        //event code will go here    
        if(selectMode == 0)
            {
                selectMode = 1;
                selectButton.html("cut");
                loadPixels(); //store current frame
                console.log("cutcut");
            }
        else if(selectMode == 1)
            {
                selectMode = 2;
                selectButton.html("end paste");
                  //refreshh screen
                updatePixels();
                //store pixels
                selectedPixels = get(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
                console.log(selectedArea.x, selectedArea.y,selectedArea.w, selectedArea.h);
                //white rectangle over place
                fill(255);
                noStroke();
                rect(selectedArea.x,selectedArea.y, selectedArea.w, selectedArea.h);
                stroke(0);
               console.log("paste?");
            }
        else if(selectMode == 2)
            {
                selectMode = 0;
                loadPixels();
                selectedArea = {x: 0, y:0, w: 100, h: 100};
               selectButton.html('select area');
                console.log("no rect");
            }
    });
    };

var selectedPixels = null;

   
	noFill();
    stroke(0);

    



this.draw = function()

{
 
    
    //you might recognise this code
    if(mouseIsPressed)
    {
        if(mousePressOnCanvas()&&selectMode == 0)
{
        
        //check if they previousX and Y are -1. set them to the current
        //mouse X and Y if they are.
        if (previousMouseX == -1)
        {
            previousMouseX = mouseX;
            previousMouseY = mouseY;
        }
        //if we already have values for previousX and Y we can draw a line from 
        //there to the current mouse location
        else
        {
            line(previousMouseX, previousMouseY, mouseX, mouseY);
            previousMouseX = mouseX;
            previousMouseY = mouseY;
        }
   // console.log("drawingsss");
    }
        
        else if(mousePressOnCanvas()&&selectMode == 1)
            {
                updatePixels();
                noStroke();
                fill(255,0,0,100);//red,0,0, 100 transperent
                rect(selectedArea.x, selectedArea.y, selectedArea.w,selectedArea.h);
                // console.log("red rectangle is");
            }
        }
    
    else
    {
        //if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
        previousMouseX = -1;
        previousMouseY = -1;
       // console.log("green light so previous x");
    }

    if (mousePressOnCanvas()&&mouseIsPressed && selectMode === 1) {
            // Set starting point
            selectedArea.x = mouseX;
            selectedArea.y = mouseY;
        }

        if (selectMode === 2 && selectedPixels && mouseIsPressed) {
            // Paste the selected area where the mouse is clicked
            image(selectedPixels, mouseX, mouseY);
        }
   
};
    
    
    
    this.unselectTool = function () {
        updatePixels();
        select("#sizeOfStarControl").html(""); 
    };
    
    function setup() {
    //let canvas = createCanvas(800, 800);
    let cutTool = new CutTool(canvas);
    cutTool.populateOptions(); // Call this to initialize the button
}
    
    
}



