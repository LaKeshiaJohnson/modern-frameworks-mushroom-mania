"use strict";
console.log("mushroom factory!");

app.factory("MushroomFactory", function($q, $http) {
	let getMushrooms = () => {
		let items = [];
		return $q ((resolve, reject) => {
			$http.get(`https://general-69f08.firebaseio.com/mushrooms.json`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;

				resolve(itemCollection);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	

	return {getMushrooms};
});

//./data/mushrooms.json
//https://general-69f08.firebaseio.com/mushrooms.json