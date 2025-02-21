function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		//if mouse is pressed then draw
		if(mouseIsPressed){
			//the start of the line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				//the end of the line
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
		//if not no
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
