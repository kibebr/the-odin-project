const Grid = (function(){
    const container = document.getElementById("grid-container");
    
    function createGrid(rows, cols){
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-cols", cols);

	const totalCells = (rows * cols);
	
	for(let i = 0; i < totalCells; ++i){
	    let newCell = document.createElement("div");
	    newCell.className = "box";
	    container.appendChild(newCell);
	}	
    }

    function resetGrid(){
	while(container.firstChild){
	    container.removeChild(container.lastChild);
	}
    }
    
    return{
	createGrid : createGrid,
	resetGrid : resetGrid
    }
    
}) ();

Grid.createGrid(16, 16);
