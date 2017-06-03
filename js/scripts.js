//this is our business logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var remainder = function(number1, number2) {
  return number1 % number2;
};

//this is our user interface

$(document).ready(function() {
  $("#variables form").submit(function(event) {
    var number1 = parseFloat($("input#number1").val());
    var number2 = parseFloat($("input#number2").val());
    var operator = $("input:radio[name=operator]:checked").val();

    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("operator: " + operator);  // for debugging

    var output =  add(number1, number2);

    $(".result").text(output);
    event.preventDefault();
  });
});
