Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    }
    else {
        alert("Error!");
    }
}


//function addition(numThree, numTwo) {
  //  if(typeof(numThree) == "number" && typeof(numTwo) == "number") {
    //return numThree + numTwo;
//}
//else {
  //  alert ("Error!");
//}
//}