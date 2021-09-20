var dress = "little dress";

function myDress()
{
    var dress = "ball gown";
    return dress;
}

myDress.call();
console.log(dress);
console.log(myDress());
module.exports = myDress;