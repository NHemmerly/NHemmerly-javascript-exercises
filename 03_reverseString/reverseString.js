const reverseString = function(word) {
    const wordArray = word.split("");
    let reversed = "";

    for (let i = wordArray.length -1; i >= 0; i--) {
        reversed += wordArray[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
