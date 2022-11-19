const removeFromArray = function(list, ...restArgs) {
    if (!(arguments.length > 1)) {
        return list;
    }

    let newArray = new Array();
    for (const num of list) {
        if (!(restArgs.includes(num))) {
            newArray = newArray.concat(num);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
