

function converter (op, a) {
    if (op === "ml2km") return a * 1.6;
    else if (op === "c2f") return (a * 9/5)+32;
    else if (op === "lb2kg") return a * 0.454;
    else if ( op === "ft2m") return a * 0.305;
    else return 'invalid operation'
}

module.exports = {converter}
