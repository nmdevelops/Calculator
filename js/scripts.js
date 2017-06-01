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

$(function) {
  $("#blanks form").submit(function(event) {
    add (input#number1, input#number2);

    event.preventDefault();
  });
});
