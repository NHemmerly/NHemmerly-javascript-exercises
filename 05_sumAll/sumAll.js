const sumAll = function(a, b) {
    if ((a < 0 || b < 0) || (typeof a && typeof b) != "number") {
        return 'ERROR';
    }
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }

    let sum = ((b - a) + 1) / 2 * (a + b);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
