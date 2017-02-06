
// Get a reference to the button element in the DOM
var button = document.getElementById("convert");
var newTemp = document.getElementById("newTemp");
var result = "";

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// This function should determine which conversion should happen based on which radio button is selected.

function determineConverter (clickEvent) {
  var units = document.getElementsByName("units")
  	units.forEach(function(x) {
  	if (x.checked) {
  		var input = document.getElementById("converter").value;
  		var runSwitch = true;
  		if (isNaN(input)) {
  			alert("Please input a number");
  			runSwitch = false;
  		}	

  		if (runSwitch) {

	  		switch(x.id) {
	  			case "cel": 
					result = input * (9/5) + 32;
	  			break;
				case "fah": 
					result = (input - 32) * (5/9);
				break;
				default: 
					alert("You didn't select a unit!");
				break;

	  		}

	  		newTemp.value = result;
	  		console.log(newTemp);
			console.log(result);
	  	}

  	}
  });
}






// For reference to study
// 
  	// var isChecked = false;
  	// isChecked = x.checked;
  	// console.log(isChecked);