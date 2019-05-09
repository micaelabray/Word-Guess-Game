// Global variables
var songTitles = ["SUCKER", "COOL", "LOVEBUG", "A LITTLE BIT LONGER", "HOLD ON", "FLY WITH ME"];
var blankSpaces = [];
var guessedLetters = [];
var currentGuess;
var wins = 0;
var guessesTotal = 10;
var guessesLeft;

function initialSetup(){ 
    // Starts the game
    document.getElementById("directions-text").innerHTML = "Guess the Jonas Brother song title!";
    // Picks a random songTitle from array
    currentGuess = songTitles[Math.floor(Math.random()*songTitles.length)];
    blankSpaces = [];   

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
    // Updates text for number of guesses left
    guessesLeft = guessesTotal;
    // Takes away guessed letters
    guessedLetters = [];
  }


// Array

// Button
// function play(){
//     var audio = document.getElementById("audio");
//     audio.play();
// }