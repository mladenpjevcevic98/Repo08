function myTest(x, y)
{
    if(x<0 || y<0)
    {
        return "Undefined";
    }
    else
    {
        return Math.round( Math.pow(Math.sqrt(x) + Math.sqrt(y), 2) );
    }
}

console.log(myTest(2,2));
console.log(myTest(-2, 2));
console.log(myTest(2, -2));
console.log(myTest(2, 8));
console.log(myTest(3, 3));
console.log(myTest(0, 0));
module.exports = myTest;
