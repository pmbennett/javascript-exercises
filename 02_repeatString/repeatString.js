const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        result = "ERROR";
    }

    for (let i = 0; i < num; i++) {
        if (i == 0) {
            result = string;
        } else {
            result += string;
        }
    }
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = repeatString;