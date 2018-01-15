// Click Event Example //

document.addEventListener("click", function() {
	var wordmark = document.getElementById("wordmark")
	var background = document.getElementById("body")
	var heading = document.getElementById("main-heading")
	var address = document.getElementsById("address")
	console.log("Variables work!")
		
// This will change the title of the website //		
		wordmerk.innerText = "NemosPals"
		wordmark.style.color = "white"
		wordmark.style.webkitTextStrokeColor = "black"
		console.log("Title works!")

		
// This will change the background color //
		background.style.background-color = "orange"
		console.log("Background works!")
		
// This will change the main.heading //
		heading.innerText = "Fish are Friends, not Food"
		heading.style.color == "white"
		console.log("Main Heading works!")

// This will change the address //
		address.innerText = "42 Wallaby Way, Sydney"
		address.style.color = "black"
		console.log("Everything works!")		
});



