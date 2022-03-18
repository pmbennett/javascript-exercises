const reverseString = function(string) {

    let charArr = []
    let len = string.length;
    for (i = 0; i < len; i++) {
        charArr[i] = string.substr(-(i + 1), 1);
    }

    let result = charArr.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;