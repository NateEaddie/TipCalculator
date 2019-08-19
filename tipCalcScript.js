function calculateTip(){

    //Get the value of the inputs
    var total = document.getElementById("bill").value;
    var tip = document.getElementById("tipPer").value;
    var num = document.getElementById("numPeople").value;

    if(num <= 0){
        alert("You need at least one person to calculate tip and total");
    }

    if(tip < 0){
        alert("You can't tip a negative amount")
    }

    //Calculations
    var tipDecimal = tip/100;

    var tipPerPerson = (total * tipDecimal)/num;
    var totalPerPerson = tipPerPerson + (total/num);

    var totalBillAmount = totalPerPerson * num;

    //Output
    document.getElementById("tipPerPerson").innerHTML = "$"+tipPerPerson.toFixed(2);
    document.getElementById("totalPerPerson").innerHTML = "$"+totalPerPerson.toFixed(2);
    document.getElementById("fullAmount").innerHTML = "$" + totalBillAmount.toFixed(2);

};

/*
Set variable i and x to 0 to increment/decrement in the respective functions
The functions take an id element sent as a parameter. The value of that id is then changed to i as it is
incremented or decremented
*/

var i =0;
function increment(elem){
    
    i++;
    document.getElementById(elem).value=i;

    
};



function decrement(elem){
    i--;

    document.getElementById(elem).value=i;
};

var x = 0; 
function increment1(elem){
    
    x++;
    document.getElementById(elem).value=x;

    
};

function decrement1(elem){
    x--;

    document.getElementById(elem).value=x;
};

