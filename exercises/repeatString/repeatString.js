const repeatString = function(str, reps){
	let newString = "";

	for(let i = 0; i < reps; ++i)
		newString += str;
	

	return newString;
}

module.exports = repeatString