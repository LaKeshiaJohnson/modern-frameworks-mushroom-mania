"use strict";
console.log("mushroom factory!");

app.factory("MushroomFactory", function($q, $http) {
	let getMushrooms = () => {
		let items = [];
		return $q ((resolve, reject) => {
			$http.get('./data/mushrooms.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;

				resolve(itemCollection.mushrooms);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	/*let getOneMushroom = () => {
		console.log("getOneMushroom");
	};*/

	return {getMushrooms};
});