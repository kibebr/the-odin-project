const removeFromArray = function(array, ...toDelete){
    return array.filter(item => !toDelete.includes(item));
}

module.exports = removeFromArray
