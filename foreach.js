let a = ["ant", "bat", "cat", 42];
a.forEach(function(elements) {
	console.log(elements);
});

a.forEach((elements) => console.log(elements));

let soliloquy = "To be or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
	console.log(character)
});

let nbr = [17, 8, 42, 99, 4, 9, 50, 1];
nbr.sort(function(a, b) {
	return a - b;});
nbr.forEach(function(num) {
	console.log(num);
});
