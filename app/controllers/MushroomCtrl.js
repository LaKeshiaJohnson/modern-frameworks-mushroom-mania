"use strict";
console.log("mushroom controller");

let mushroomArray = [];

app.controller("MushroomCtrl", function($scope, MushroomFactory) {
	MushroomFactory.getMushrooms()
	.then(function(itemCollection) {

		let mushroomArray = [];
		let mushrooms = Object.keys(itemCollection);
		mushrooms.forEach((item) => {
			mushroomArray.push(itemCollection[item]);
		});
		$scope.mushrooms = mushroomArray;
		console.log("different mushrooms:", mushroomArray);
	});

});