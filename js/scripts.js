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

  $("input:radio[name=operator]").click(function() {
    $(".remainder").hide();
    $(".result").hide();
  });

  $("input:radio[value=divideRemainder]").click(function() {
    $(".integerCalcHide").hide();
  });

  $("input:radio[value!=divideRemainder]").click(function() {
    $(".integerCalcHide").show();
  });


  $("#variables form").submit(function(event) {
    var number1 = parseFloat($("input#number1").val());
    var number2 = parseFloat($("input#number2").val());
    var precision = parseInt($("select#precision").val());
    var operator = $("input:radio[name=operator]:checked").val();
    $(".result").show();
    //$(".integerCalcHide").show();

    //console.log("Precision: " + precision);  // for debugging
    //console.log("2nd number: " + integer2);  // for debugging
    //console.log("operator: " + operator);  // for debugging

    var output;
    var remainderOutput;
    if (operator === "add") {
      output = add(number1, number2);
    } else if (operator === "subtract") {
      output = subtract(number1, number2);
    } else if (operator === "multiply") {
      output = multiply(number1, number2);
    } else if (operator === "divide") {
      output = divide(number1, number2);

    } else if (operator === "divideRemainder") {
      output = divide(number1, number2);
      remainderOutput = remainder(number1, number2);
      $(".remainder").show();
      $(".result").hide();
    }
    var result = output.toFixed(precision)
    console.log("result:" + result);
    $(".result").text(result);
    $(".remainder").text("Quotient: " + parseInt(output) + "   " + "Remainder: " + remainderOutput);

    event.preventDefault();
  });
});
