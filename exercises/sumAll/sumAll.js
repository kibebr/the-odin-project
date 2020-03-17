const sumAll = function(num1, num2){

    if( !(typeof num1 == "number") || !(typeof num2 == "number")){
	return "ERROR";
    }
    else if( (num1 < 0) || (num2 < 0)){
	return "ERROR";
    }
    
    let sum = -1;

    for(let i = 0; i <= num1; ++i){
	sum += i;
    }

    for(let x = 0; x <= num2; ++x){
	sum += x;
    }

    return sum;
}

module.exports = sumAll
