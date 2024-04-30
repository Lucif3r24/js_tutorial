// Adds "reverse" to all strings.
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Adds a "blank" to all strings. 
String.prototype.blank = function blank() {
	return this.match(/^\s*$/)
	// return /^\s*$/.test(this)
}

// Adds a "last" to all Array.
Array.prototype.last = function last() {
	return this.slice(-1)
}

// Reverses a string.
function reverse(string) {
	return Array.from(string).reverse("").join("")
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}

function emailParts(email) {
	let pressecedContent = email.toLowerCase();
	return pressecedContent.split("@");
}

// Defines a Phrase object.
function Phrase (content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase()
	}
	
	// Makes the phrase LOUDER.
	this.louder = function() {
		return this.content.toUpperCase()
	};

	// Returns content processed for palindrome testing. 
	this.processedContent = function processedContent() {
	return this.processor(this.content);
	}
	// Returns true for a palindrome, false otherwise
	this.palindrome = function palindrome() {
	return this.processedContent() === this.processedContent().reverse();
	}
}



