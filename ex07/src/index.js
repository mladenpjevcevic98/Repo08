var sum = 0;

function addThree()
{
    sum += 3;
    return sum;
}

function addFive()
{
    sum += 5;
    return sum;
}


console.log(addThree());
console.log(addFive());
module.exports =  {addThree, addFive};