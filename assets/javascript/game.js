// simple test to see that the external javascript file is properly linked to html by the src attribute

document.write("the script file is linked");

var wins = 0;
var losses = 0;
var guessesLeft = 5;

// simple test 3 letters array

var letter = ["a", "b", "c"];

// use random method to pick an index from the letter array and store as randomPick

// need for loop to cycle through the number of attempts until guessesLeft is 0
// for (i = 0, i < guessesLeft, i--)

var randomPick = letter[Math.floor(Math.random()*letter.length)];

	console.log(randomPick);

// use onkeyup to trigger a function

document.onkeyup = function() {

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

// conditional if/elseif to split up wins and losses path where wins increases 
// win count and resets guessesLeft and losses increases loss count and decreases guessesLeft
// and also displays lossGuesses of the wrong guess letters but not to duplicate using probably
// another for loop and function.

	if (userInput == randomPick) {
		alert ("this if thing works!");
		console.log(userInput);
		wins++;

		else if {
			guessesLeft++;
			losses++;

		}
	}


}