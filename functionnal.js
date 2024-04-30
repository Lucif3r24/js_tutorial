let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
}

// urls : Imperative version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(element => {
		urls.push(urlify(element));
	});
	return urls;
}

console.log(imperativeUrls(states));

// urls : Functional version
function functionalUrls(elements)  {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));



// singles : Imperative version
function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(element => {
		if (element.split(/\s+/).length === 1) {
		singles.push(element);
	  }
	});
	return singles;
}
console.log(imperativeSingles(states));

// singles : Functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(n => {
		total += n;
	});
	return total;
}
console.log(imperativeSum(numbers))

// sum: Functional solution
function functionalSum(elements) {
	return numbers.reduce((total, n) => { total += n; return total;});
}
console.log(functionalSum(numbers))



// lengths : Imperative solution
function imperativeLengths(elements) {
	let lengths ={}
	elements.forEach(element => {
		lengths[element] = element.length;
	})
	return lengths
}
console.log(imperativeLengths(states))
  
// lengths : Functional solution
function functionalLengths(elements) {
	return elements.reduce((lengths, element) => {
							lengths[element] = element.length;
							return lengths;
						}, {})
}
console.log(functionalLengths(states))







console.log("Exercises results :")
// Exercice 6.1.1
// Imperative version
function exerciseUrls(elements) {
	let  url = []
	elements.forEach(element => {
		url.push("https://example.com/" + urlify(element));
	});
	return url;
}

console.log(exerciseUrls(states))

// Functional version
function functionalExerciseUrls(elements)  {
	return elements.map(element => "https://example.com/" + urlify(element));
}
console.log(functionalExerciseUrls(states));


// Exercice 6.2.1
// Imperative version
function functionalCompoundsIncludes(elements) {
	return elements.filter(element => element.includes("Dakota"))
}
console.log(functionalCompoundsIncludes(states));

// Functional version
function functionalCompoundsLength(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalCompoundsLength(states));


// Exercice 6.3.4
function reduceProducts(elements) {
	return numbers.reduce((total, n) => { total *= n; return total;});
}
console.log(reduceProducts(numbers))

