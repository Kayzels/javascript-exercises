const removeFromArray = function(array, ...values) {
    function notEqualsValue(valueToCheck) {
        for (const value of values) {
            if (valueToCheck === value) {
                return false;
            }
        }
        return true;
    }
    return array.filter(notEqualsValue);
};

// Do not edit below this line
module.exports = removeFromArray;
