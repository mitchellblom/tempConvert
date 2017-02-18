
// Get a reference to the button element in the DOM 
// aka "hey JS, you should care about these IDs in HTML"
var button = document.getElementById("convert");
var newTemp = document.getElementById("newTemp");
var result;
var tempColor;

var resetButton = document.getElementById("reset");

button.addEventListener("click", determineConverter);
// console.log(button.addEventListener);

resetButton.addEventListener("click", function() {
	newTemp.className = "";
});

button.addEventListener("keypress", determineConverter);
document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   determineConverter();
 } 
}


function determineConverter (clickEvent) {
// declaring a variable and assigning only the radio buttons with the name "units"
  var units = document.getElementsByName("units")
  	units.forEach(function(radioButton) 
  	{	
  	if (radioButton.checked) {
// if a radio named "units" is checked, this takes value from "converter" field to run this switch
  		var input = document.getElementById("converter").value;
  		var runSwitch = true;

  		if (isNaN(input)) {
  			alert("Please input a number");
  			runSwitch = false;
  		}	
  		if (runSwitch) {
	  		switch(radioButton.id) {
	  			case "inputCel":
					result = input * (9/5) + 32;
					tempColor = "outputFah";
	  			break;
				case "inputFah":
					result = (input - 32) * (5/9);
					tempColor = "outputCel";
				break;
				default:
				break;
	  		}

	  		newTemp.value = result;

	  		if (tempColor === "outputCel") {

	  			if (result > 32) {
	  				newTemp.className = "red";
	  			} else if (result > 0 && result < 32) {
	  				newTemp.className = "green";		
	  			} else {
	  				newTemp.className = "blue";
	  			}
	  		} else if (tempColor === "outputFah") {

	  			if (result > 90) {
	  				newTemp.className = "red";
	  			} else if (result > 32 && result < 90) {
	  				newTemp.className = "green";
	  			} else {
	  				newTemp.className = "blue";
		  		}
	  		}
	  	}
  	}
  });
}
