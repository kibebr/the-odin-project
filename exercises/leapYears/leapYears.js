const leapYears = function(year){
    
    // year must be divisible by 4
    if( !( (year % 4) == 0) ){
	return false;
    }

    // years divisible by 100 are not leap years, unless divisable by 400
    if( (year % 100) == 0){
	if( (year % 400) == 0){
	    return true;
	}

	return false;
    }

    return true;
}

module.exports = leapYears

