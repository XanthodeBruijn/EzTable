window.onload = function() {
  console.log("Created by Tim Van den Enden on 31/01/2017.");
  console.log("Copyright 2017 Tim Van den Enden. All rights reserved.");
};



var ezTable = function () {
	var table = document.getElementById("Table");
	var input = document.getElementById('input');
	var value = input.value;
	var output = "";

	for (i = 0; i <= 10; i++) { 
    	output = Number(value) * Number(i);
    	// console.log(i + " x " + value + " = " + output);

    	if (i == 0) {
    		var row = table.insertRow(i);
    		var cell1 = row.insertCell(0);
    		cell1.innerHTML = "De tafel van " + value + "!";
    	} else {
    		var row = table.insertRow(i);
    		var cell1 = row.insertCell(0);
    		cell1.innerHTML = i + " x " + value + " = " + output;
    	}
	}
}

// Created by Tim Van den Enden on 31/01/2017.
// Copyright © 2017 Tim Van den Enden. All rights reserved.
