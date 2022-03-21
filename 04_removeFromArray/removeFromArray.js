const removeFromArray = function(char, ...args) {
    let arr = [];
    arr = char;
    let remArr = [];
    remArr = args;

    for (let i = 0; i < remArr.length; i++) {
        for (let j = 0; j < char.length; j++) {
            if (char[j] === remArr[i]) {
                char.splice(j, 1);
            }
        }
    }

    return char;
};

// Do not edit below this line
module.exports = removeFromArray;