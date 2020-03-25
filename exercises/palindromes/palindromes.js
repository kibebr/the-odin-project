const palindromes = function(string){
	let newString = "";
	let inverseString = "";
	
	for(let index = 0, strlen = string.length; index < strlen; ++index){
		if(isSpecialChar(string[index]))
			continue;
		else
			newString += string[index];
	}

	for(let index = (newString.length-1); 0 <= index; --index){
		inverseString += newString[index];
	}

	if(newString == inverseString)
		return true;
	else 
		return false;
}

function isSpecialChar(chara){
	return !/ .[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(chara);
}

module.exports = palindromes
