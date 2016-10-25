$(document).ready(function(){

debugger;

 var equation = function(val1, val2) {
   for (var loop= 0; loop <=val1; loop+= val2);
   //console.log(loop);
}



var countTo = parseInt($("input#multiplier").val());
var multiply = parseInt($("input#multiplicand").val());
equation = (countTo, multiply);
 $(".strand").text(equation);

event.preventDefault()
});
