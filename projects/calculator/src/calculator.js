const Calculator = (function(){

	const container = document.getElementById("calculator-container");
	const buttons = container.querySelectorAll("#calculator-numbers>button");
	const result = container.querySelector("#calculator-result");


	let numbers = [0,0];
	let operation = '';
	let currentPos = 0;

	function update_result() { result.textContent = parseInt(numbers[currentPos]); }

	function resolve(){

	}

	buttons.forEach(button => {
		button.addEventListener("click", function(event){
		
			if(event.target.classList.contains("number")){
				numbers[currentPos] += event.target.textContent;
				update_result();
			}
			else if(event.target.classList.contains("operator")){ 
				currentPos = 1;
				operation = event.target.textContent;
				numbers[1] = 0;
			}
			else if(event.target.id == "calculator-big-equal"){
				currentPos = 0;

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
				update_result();
			}
			else if(event.target.id == "calculator-clear"){
				buttons.forEach(button => {
					button.classList.toggle("shake");
				});
			}

			console.table(numbers);
		});
	});

}) ();