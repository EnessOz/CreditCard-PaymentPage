function nameinput(x) {
    document.getElementById("holdername").innerHTML=x.value;
}
function numberinput(x) {
    document.getElementById("cardnumber").innerHTML=x.value;
    if(x.value > 9999999999999999) {
        alert("The card number must be 16 digits.   ");
    }
}
function monthinput(x) {
    document.getElementById("monthNum").innerHTML=x.value;
    if (x.value > 32) {
alert("Month is should be smaller than 32!");
    }
}
function yearinput(x) {
    document.getElementById("yearNum").innerHTML=x.value;
    if(x.value > 99) {
        alert("Year cannot be 3 digits.");

    }
}
function cvcinput(x) {
    document.getElementById("CVCnumber").innerHTML=x.value;
    if(x.value > 1000) {
        alert("CVC number must be 3 digits.");
    }
}