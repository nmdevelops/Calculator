var futureValue = function (donovansTreasure) {
	var principal = parseFloat(prompt("What is the Principal Amount?"));
  var rateOfReturn = parseFloat(prompt("What is the periodic rate of return?"))/100;
  var numberOfPeriods = parseInt(prompt("How many periods will the money be saved for?"));
  var fvCalculation = principal * ((1 + rateOfReturn)**numberOfPeriods);
  alert("The future Value of Donovan's Birthday Treasure is $" + fvCalculation.toFixed(2) + " Great Job Buddy!  We are proud of you!");
};

futureValue();
//5.946% is the monthly return for annual doubling


//Periodic Rate

var effectiveRate = function (periodicRate) {
	var annualRate = parseFloat(prompt("What is the desired annual return?"))/100;
  var calculatedMonthlyRate = (1+ annualRate)**(1/12); /*Pass this into Calculations*/
  var displayMonthlyRate = (calculatedMonthlyRate*100)-100;
  alert(displayMonthlyRate.toFixed(3) + "%");
};

effectiveRate();
