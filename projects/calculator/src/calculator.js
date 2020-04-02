const Calculator = (function(){

	const container = document.getElementById("calculator-container");
	const calculator = container.querySelector("#calculator");
	const buttons = container.querySelectorAll("#calculator-numbers>button");
	const result = container.querySelector("#calculator-result");

	let numbers = [0,0];
	let operation = '';
	let currentPos = 0;

	function update_result() { result.textContent = parseInt(numbers[currentPos]); }

	function setOperator(operator){

		currentPos = 1;
		operation = operator;
		numbers[1] = 0;
		
	}

	function resolve(){

		switch(operation){
			case '+':
				numbers[0] = parseInt(numbers[0]) + parseInt(numbers[1]);
				break;
			case '-':
				numbers[0] = parseInt(numbers[0]) - parseInt(numbers[1]);
				break;
			case 'x':
				numbers[0] = parseInt(numbers[0]) * parseInt(numbers[1]);
				break;
			case '/':
				numbers[0] = parseInt(numbers[0]) / parseInt(numbers[1]);
				break;
		}

		currentPos = 0;

	}

	function clear(){

		numbers[0] = 0;
		numbers[1] = 0;
		currentPos = 0;
		operation = '';

		(function shake_calculator(){
			calculator.classList.toggle("shake");
		}) ();

	}

	buttons.forEach(button => {
		button.addEventListener("click", function(event){
		
			if(event.target.classList.contains("number")){
				numbers[currentPos] += event.target.textContent;
			}
			else if(event.target.classList.contains("operator")){ 
				setOperator(event.target.textContent);
				return;
			}
			else if(event.target.id == "calculator-big-equal"){
				resolve();
			}
			else if(event.target.id == "calculator-clear"){
				clear();
			}

			update_result();
		});
	});

	// KEYBOARD SUPPORT

	document.addEventListener("keydown", function(press){
		if(press.keyCode == 8 && numbers[currentPos].length != 2){ // backspace
			numbers[currentPos] = numbers[currentPos].slice(0, -1);
		}
		else if(press.keyCode >= 48 && press.keyCode <= 57){ // numbers
			numbers[currentPos] += String.fromCharCode(press.keyCode);
		}
		else if(press.keyCode == 67){ // clear
			clear();
		}
		else if(press.keyCode == 13){ // enter
			resolve();
		}
		else{
			switch(press.keyCode){
				case 107:
					setOperator('+');
					break;
				case 109:
					setOperator('-');
					break;
				case 106:
					setOperator('x');
					break;
				case 111:
					setOperator('/');
					break;
			}
		}

		update_result();
	});

}) ();