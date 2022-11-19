const ftoc = function(far) {
    let cel = (far - 32) * (5/9)
    cel = Math.round((cel + Number.EPSILON) * 10) / 10;

    return cel;
};

const ctof = function(cel) {
    let far = (cel * (9/5) + 32) 
    far = Math.round((far + Number.EPSILON) * 10) / 10;

    return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
