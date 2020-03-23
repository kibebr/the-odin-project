function add(num1,num2){
	return num1+num2;
}

function subtract(num1, num2){
	return num1-num2;
}

function sum(...numbers){
	let total = 0;
	numbers.forEach(number => {
		total += number;
	});
	return total;
}

function multiply(...numbers){
	let total = 0;
	numbers.forEach(number => {
		total *= number;
	});
	return total; 
}

function power(base, exp){
	let result = 0;
	for(let i = 0; i < exp; ++i)
		result *= base;
	return result;
}

function factorial(number){
	let result = number;
	while(number != 1){
		result *= (--number);
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
        factorial
}
