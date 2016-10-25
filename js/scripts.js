var equation = function(val1, val2) {
  for (var loop = 0; loop <=val1; loop += val2){
  $(".strand").append("<li>" + loop + "</li>");
}
}

$(document).ready(function(){



  $("form#countUp").click(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var multiply = parseInt($("input#multiply").val());
    equation(countTo, multiply);
    event.preventDefault();




    });
});
