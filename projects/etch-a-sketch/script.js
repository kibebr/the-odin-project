const Grid = (function(){
    const placeholder = document.getElementById("grid-placeholder");

    this.currColor = "black";
    var currRows = 16;
    var currCols = 16;
    
    function createGrid(rows, cols){
	placeholder.style.setProperty("--grid-rows", rows);
	placeholder.style.setProperty("--grid-cols", cols);

	const totalCells = (rows * cols);
	Grid.currColor = currColor;
	for(let i = 0; i < totalCells; ++i){
	    let newBox = new Box();
	    newBox.init();
	    placeholder.appendChild(newBox.element);
	}	
    }

    function resetGrid(){
	while(placeholder.firstChild){
	    placeholder.removeChild(placeholder.lastChild);
	}
    }

    (function OptionManager(){
	
	const buttons = document.querySelectorAll(".button");
	buttons.forEach(button => {
	    button.addEventListener("click", (event) => {
		if(event.target.id == "reset"){
		    Grid.resetGrid();
		    Grid.createGrid(currRows, currCols);
		    
		    (function shakeGrid(){
			placeholder.classList.remove("animate-shake");
			void placeholder.offsetWidth;
			placeholder.classList.add("animate-shake");
		    }) ();
		}
		else if(event.target.id == "color"){
		    Grid.currColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		    event.target.style.color = Grid.currColor;
		}	
	    });
	});

	const settings = document.querySelectorAll(".grid-settings");
	settings.forEach(setting => {
	    setting.addEventListener("keydown", (event) => {
		if(event.keyCode == 13){
		    Grid.resetGrid();
		    
		    currRows = settings[0].innerHTML;
		    currCols = settings[1].innerHTML;
		    
		    Grid.createGrid(currRows, currCols);
		    event.preventDefault();
		}
	    });
	});
	
    }) ();
    
    return{
	createGrid : createGrid,
	resetGrid : resetGrid,
	getColorToPaint : function(){
	    return this.currColor;
	}
    }
    
}) ();

function Box(){
    this.element = document.createElement("div");
    
    this.init = function(){
	this.element.className = "box";
	this.element.addEventListener("mouseover", () => this.change_color(Grid.getColorToPaint()));
    }

    this.change_color = (color) => this.element.style.background = color; 
}

Grid.createGrid(16, 16);
