let Phrase = require ("mhartl-palindrome");

function palindromeTester(event) {
	event.preventDefault();

	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if(phrase.palindrome()) {
		palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
	};
}

	document.addEventListener("DOMContentLoaded",function(){
	let buttom = document.querySelector("#palindromeTester");
	buttom.addEventListener("submit", function(event) {
		palindromeTester(event);
	})
});

