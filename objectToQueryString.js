// Нужно написать функцию toSearchString, которая на входе получает одноуровневый объект, значения могут быть строки или числа.
//         **query-string -  https://en.wikipedia.org/wiki/Query_string
        
// 	toSearchString({}); // ''
// 	toSearchString({test: true}); // 'test=true'
// 	toSearchString({num: 10, test: true}); // 'num=10&test=true'
// 	toSearchString({num: 10, test: true, user: 'admin'}); // 'num=10&test=true&user=admin'

const object = {
	name: "Alex",
	age: 20,
	isMember: true,
};

const objectLength = Object.keys(object).length;

let searchString = "";
let counter = 0;

const toSearchString = (object) => {
	for (let key in object) {
		searchString += (key + "=" + object[key]);
		counter++;
		if (counter < objectLength) {
			searchString += "&";
		};
	};
	return searchString;
};

console.log(toSearchString(object));