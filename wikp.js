#!/root/.asdf/shims/node

// Returns the paragraphs from a Wikipedia lonk, tripped of reference numbers.

let fs = require("fs");
let request = require("request");
let url = process.argv[2];
let redirect = []

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

if(url === undefined) {
	console.log("usage: wikp <url>");
	process.exit();
} 

request(url, function(error, response, body) {
	let { document } = (new JSDOM(body)).window;

	//Grab all the paragraphs and references.
	let paragraphs = document.querySelectorAll("p");
	let references = document.querySelectorAll(".reference");

	// Remove any references.
	references.forEach(reference => {
		reference.remove();
	});

	// Print out all of the paragraphs.
	paragraphs.forEach(paragraph => {
		console.log(paragraph.textContent);
		redirect.push(paragraph.textContent);
	});
	
	fs.writeFile("article.txt", redirect.join("\n"), (err) => {
		if(err) throw err; 
		console.log("The file has been saved !");
	});
});

