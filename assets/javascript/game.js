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
    
    // Picks a random songTitleArray from array with each letter a value of '_'
    for (var i = 0; i < currentGuess.length; i++) {
        console.log(currentGuess[i]);
        if(currentGuess[i] === " "){
            blankSpaces[i] = " ";
        }
        else {
            blankSpaces[i] = "-";
        }
    }

    // Gives each letter a value of '_'
    console.log(blankSpaces);
    document.getElementById("currentGuess").innerHTML = blankSpaces.join("");
                    // blankSpaces = [" "];

                    // for(var i = 0; i<currentGuess.length; i++){
                    //     blankSpaces[i]="_";
                    //  }

                    //      document.getElementById("currentGuess").innerHTML = blankSpaces.join("_");

  
    // Changes spaces to a blank space instead of an underscore
    for (var j=0;j<currentGuess.length;j++){
        if (currentGuess[j] ==" "){
           blankSpaces[j] ==" ";
        }
    }

    var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML = guessesTotal;
    // Updates text for number of guesses left
    guessesLeft = guessesTotal;
    // Takes away guessed letters
    guessedLetters = [];

    //trying to get the letters guessed to show back up
    if(document.onkeyup === currentGuess[i]){
        blankSpaces != "_";
    }

    function checkInput(input) { 
        // if you guess a letter and it isn't in the word, attempting to reduce the guesses left by 1 and add the letter to the guessed letters section
        if (guessedLetters.indexOf(input) === -1){ 
            guessedLetters.push(input);
            if (currentGuess.indexOf(input) === -1){
                guessesLeft--;
            }
        }
        
        //attempting to get the letter you are guessing to appear in the DOM
        else {
            for (var i = 0; i < currentGuess.length; i++){
                if (input === currentGuess[i]) { 
                blankSpaces[i] = input;
                }
            }
        }
    }

}

document.onkeyup = function(event) {
    startUp();
}
