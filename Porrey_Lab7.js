function displayWelcome() {
    //get current time and date
    var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var day = today.getDay();
        var hour = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
    //display time and date
    document.getElementById('date').innerHTML = today;

    getPuzzle();
}

var word = "antidisestablishmentarianism";
var newWord = "";
var win = false;
var attempts = 11;

//prompt user for their name
var playerName = prompt("Please enter your name");

//code to replace _ with character
function setCharAt(str, index, chr) {
    if(index > str.length - 1) 
        return str;
                           
        return str.substr(0, index) + chr + str.substr(index + 1);
}


function getPuzzle() {
        //welcome user by their name
    document.getElementById('playerName').innerHTML = "," + " " + playerName;

    newWord = ""; 
    var lgth = word.length; 

        //code to create _ for the length of guess word
    for (var i = 0; i < lgth; i++) {
            newWord = newWord + "_ ";
        }

            //display _ and # of attempts left
        document.getElementById("game").innerHTML = newWord;
        document.getElementById("attempts").innerHTML = "Attempts: " + (attempts - 1);
}
    

function solvePuzzle() {
    var guess = prompt("Guess a letter or solve the puzzle.");
    
    if (win || attempts <= 0) {
        alert("Refresh the page to play again.");
    }

        if (guess === null || guess === "") {
            alert("Please guess a letter or solve the puzzle!");
            return;
        }

        else if (guess.length === 1) {
            var found = false;
            
            for (var j = 0; j < word.length; j++) {
                if (guess == word.charAt(j)) {
                    found = true;
                    var offSet = 2 * j;
                    newWord = setCharAt(newWord, offSet, word.charAt(j));
                }
            }

                attempts--;
                document.getElementById("attempts").innerHTML = "Attempts: " + (attempts - 1);


                if (found) {
                    document.getElementById("result").innerHTML = "Congrats! There is a(n) " + guess + " !";

                    if (!newWord.includes("_")) {
                        win = true;
                        document.getElementById("result").innerHTML = "You win!";
                    }
                }

                else {
                    document.getElementById("result").innerHTML = "Sorry, try again.";

                    //if (attempts <= 0) {
                    //    win = false;
                    //    document.getElementById("result").innerHTML = "Game over."
                    //}
                }
            }

        else {
            checkWord(guess);
        }

        document.getElementById("game").innerHTML = newWord;

        if (attempts === 1) {
            var lastGuess = prompt("Last try: Enter the word to win the game!");
            checkWord(lastGuess);
        }

        if (attempts === 0) {
            document.getElementById("result").innerHTML = "You have no attempts left. Refresh to try again.";
            return;
        }
}


function checkWord(guessedWord) {
    if (guessedWord === word && attempts <= 11) {
        win = true;
        document.getElementById("result").innerHTML = ("You win, " + playerName + "!");
        document.getElementById("game").innerHTML = word;
    }

    else {
        document.getElementById('result').innerHTML = "You lost, " + playerName + ". :( Try again next time!";
        document.getElementById("game").innerHTML = word;
    }
}