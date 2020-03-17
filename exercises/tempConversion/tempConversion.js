const ftoc = function(fahr) {
    return ( ( 5/9 ) * ( fahr-32 ) ).toFixed(1);
}

const ctof = function(celsius) {
    return ( ( celsius * (9/5) ) + 32 ).toFixed(1);
}

module.exports = {
    ftoc,
    ctof
}
