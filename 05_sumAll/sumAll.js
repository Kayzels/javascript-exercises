const sumAll = function(start, end) {
    for (const arg of arguments) {
        if (typeof arg != "number" || arg < 0) {
            return "ERROR";
        }
    }
    let sum = 0;
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
