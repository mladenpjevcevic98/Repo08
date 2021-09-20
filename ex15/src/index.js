function convertToInt(str)
{
    var str2 = parseInt(str, 16);
    return str2;
}

console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));

module.exports = convertToInt;
