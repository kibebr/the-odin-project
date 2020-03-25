let findTheOldest = function(persons){
	let currOldest = persons[0];
	if(!(currOldest.hasOwnProperty('yearOfDeath')))
		currOldest.yearOfDeath = 2020;

	for(let index = 1, objLen = persons.length; index < objLen; ++index){
		if(persons[index].yearOfDeath == undefined){
			throw new Error("aaa!!!");
			persons[index]['yearOfDeath'] = 2020;
		}
			
		let newAge = (persons[index].yearOfDeath - persons[index].yearOfBirth);

		if(newAge > (currOldest.yearOfDeath - currOldest.yearOfBirth))
			currOldest = persons[index];
	}

	return currOldest;
}

module.exports = findTheOldest
