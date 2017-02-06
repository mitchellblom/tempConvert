var conTemp = document.getElementById("newTemp");

when ( /* cel radio button is selected */ ) {
	var conTemp = conTemp * (9/5) + 32;
}

when ( /* far radio button is selected */ ) {
	var conTemp = (conTemp - 32) * (5/9);
}

newTemp.innerHTML = convertedTemp;

// var dongle = [{image:"images/cookie.png", descrip:'Punxsutawney <br> "winter" <br> $2.50'}
// ];

//   var productCard = "";
//   productCard +="<div class='productCard'><img class='productPic' src=" + dongle[i].image + "><p class='lightBox'>" + "<div class='descrip'>" + dongle[i].descrip + "</div>";


//   console.log()
// }


