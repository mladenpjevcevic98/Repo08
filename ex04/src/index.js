function localScope()
{

    var myVariable = "I am here!";
    console.log(myVariable);

        if(typeof myVariable != "undefined")
        {
            console.log('Outside localScope', myVariable);
        }
        else
        {
            console.log('Outside localScope UNDEFINED!!! ');
        }

}



localScope();
module.exports = localScope;