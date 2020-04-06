const TicTacToe = (function(){

	const DOM = {
		grids: document.querySelectorAll(".box"),
		turn: document.getElementById("turn"),
		result: document.getElementById("result")
	}

	const winning_combinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	let turn = 'X';
	let marks = 0;
	let timesPressed = 0;
	let currPos = void 0;

	for(let i = 0, len = DOM.grids.length; i < len; ++i)
		DOM.grids[i].addEventListener("click", () => mark( (currPos=i) )  );


	function mark(pos){
		if(DOM.grids[currPos].textContent != '')
			return;

		++timesPressed;

		DOM.grids[currPos].querySelector(".box-content").textContent = turn;

		if(!foundWinner()){
			turn = (turn === 'X') ? 'O' : 'X';
		}
		else{
			if(timesPressed == 9){
				tie();
			}
			else{
				win();
			}

			DOM.result.style.display = "block";
		}

		DOM.turn.textContent = turn;
	}	

	function foundWinner(){

		for(let currSet = 0, len = winning_combinations.length; currSet < len; ++currSet){

			winning_combinations[currSet].forEach(pos => {
				if(DOM.grids[pos].querySelector(".box-content").textContent == turn){
					++marks;
				}				
			});

			if(marks == 3){
				return true;
			}
			else{
				marks = 0;
			}
		}

		return false;
	
	}

	function win(){
		DOM.result.textContent = turn + " won! press to reset.";
	}

	function tie(){
		DOM.result.textContent = "tie! press to reset.";
	}

	return{
		DOM,

		reset: function(){

			DOM.result.style.display = "none";

			DOM.grids.forEach(grid => {
				grid.querySelector(".box-content").textContent = '';
			})

			marks = 0;
			timesPressed = 0;

			DOM.turn.textContent = 'X';
		}
	}

}) ();

TicTacToe.DOM.result.addEventListener("click", TicTacToe.reset);
