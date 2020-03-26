const caesar = function(string, key) {
	let cipheredString = "";

	for (let index = 0, strlen = string.length; index < strlen; ++index) {

		if (!string[index].match(/[a-z]/i)) {
            		cipheredString += string[index];
            		continue;
        	}

        	let nextChar = function() {
            		let charCode = (parseInt(string[index], 36) + key) % 36;
            		if (charCode < 10) charCode += 10;

            		nextChar = charCode.toString(36);

           		if (string[index] == string[index].toUpperCase())
                		nextChar = nextChar.toUpperCase();

            		return nextChar;
        	};

        	cipheredString += nextChar();
    	}

	return cipheredString;
}

module.exports = caesar
