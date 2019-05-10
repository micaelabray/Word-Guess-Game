// Global variables
var songTitlesArray = ["SUCKER", "COOL", "LOVEBUG", "A LITTLE BIT LONGER", "HOLD ON", "FLY WITH ME"];
var blankSpaces = [];
var guessedLetters = [];
var wins = 0;
var guessesTotal = 10;
var guessesLeft;

var currentGuess = songTitlesArray[Math.floor(Math.random()*songTitlesArray.length)];
    console.log(currentGuess);

function startUp(){ 
    // Starts the game
    document.getElementById("directionsText").innerHTML = "Guess the Jonas Brothers song title!";
    document.getElementById("currentGuess").innerHTML = blankSpaces.join(" ");
    // Picks a random songTitleArray from array
    blankSpaces = ["_"];

    // Gives each letter a value of '_'
    for(var i = 0; i<currentGuess.length; i++){
        blankSpaces[i]="_";
     }
  
    // Changes spaces to a blank space instead of an underscore
    for (var j=0;j<currentGuess.length;j++){
        if (currentGuess[j] ==" "){
           blankSpaces[j] = " ";
        }
    }

    var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML = guessesTotal;
    // Updates text for number of guesses left
    guessesLeft = guessesTotal;
    // Takes away guessed letters
    guessedLetters = [];


}

document.onkeyup = function(event) {
    startUp();
}  




// Array

// Button
// function play(){
//     var audio = document.getElementById("audio");
//     audio.play();
// }