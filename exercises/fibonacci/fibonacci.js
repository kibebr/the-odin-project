const fibonacci = function(pos){
	let fibonacciNum = 0;
	let first = 0;
	let second = 1;

	for(let steps = 0; steps < pos; ++steps){
		fibonacciNum = (first+second);
		first = second;
		second = fibonacciNum;
	}

	return fibonacciNum;
}

module.exports = fibonacci