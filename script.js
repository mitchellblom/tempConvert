
// Get a reference to the button element in the DOM 
// aka "hey JS, you should care about these IDs in HTML"
var button = document.getElementById("convert");
var newTemp = document.getElementById("newTemp");
var result;
var tempColor;

var resetButton = document.getElementById("reset");

// Assign a function to be executed when the button is clicked
// aka "when i 'click' this button, run that funciton"
button.addEventListener("click", determineConverter);

resetButton.addEventListener("click", function() {
	newTemp.className = "";
});

// This function should determine which conversion should happen based on which radio button is selected.

function determineConverter (clickEvent) {
// declaring a variable and assigning only the radio buttons with the name "units"
  var units = document.getElementsByName("units")
// checking if a radio named "units" is checked
  	units.forEach(function(radioButton) {
  	if (radioButton.checked) {
// if a radio named "units" is checked, this takes value from "converter" field to run this switch
  		var input = document.getElementById("converter").value;
  		var runSwitch = true;
// if something other than number is entered, the user gets an alert telling them as much; switch doesn't execute
  		if (isNaN(input)) {
  			alert("Please input a number");
  			runSwitch = false;
  		}	
  		if (runSwitch) {
// switch does one thing if "cel" radio is checked and another if "fah" is checked
	  		switch(radioButton.id) {
	  			case "cel": 
					result = input * (9/5) + 32;
					tempColor = "cel";
	  			break;
				case "fah":
					result = (input - 32) * (5/9);
					tempColor = "fah";
				break;
// if no unit is selected, user is alerted
				default:
				break;
	  		}
// prints new temp to "result" field
	  		newTemp.value = result;
	  		if (tempColor = "cel") {
	  			if (result > 32) {
	  				newTemp.className = "red";
	  			} else if (result > 0 && result < 32) {
	  				newTemp.className = "green";
	  			} else {
	  				newTemp.className = "blue";
	  			}
	  		} else if (tempColor = "fah") {
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
  }); // <--- placement of this semicolon alluded me until a second set of eyes helped place it properly!

}






