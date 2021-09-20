function convertStrtoInt(str)
{
    var str1 = parseInt(str);
    return str1;
}

console.log(convertStrtoInt(44));
console.log(convertStrtoInt(27));
console.log(convertStrtoInt("Jeff Bolean"));

module.exports = convertStrtoInt;