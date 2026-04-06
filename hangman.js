const PossibleWords = ["obdurate", "versimilitude", "dissonant", "obsequious", "capitulate", "deleterious", "enervate", "gregarious"];

var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let newGame = function(){
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * PossibleWords.length);
    word = PossibleWords[randomIndex];
    guesses = "";
    updatePage();
}

let updatePage = function(){
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }
        else{
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");

    let won = true;
    for (let i = 0; i < word.length; i++) {
        if (guesses.indexOf(word[i]) < 0) {
            won = false;
            break;
        }
    }

    if (guessCount === 0) {
        guessArea.textContent = "You lost :( The word was " + word;
    }
    else if (won) {
        guessArea.textContent = "You won! The word was " + word;
    }
    else {
        guessArea.textContent = "Guesses: " + guesses;
    }

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();

    if (word === "") {
        input.value = "";
        return;
    }

    if (guessCount === 0) {
        input.value = "";
        return;
    }

    if (guesses.indexOf(letter) >= 0) {
        input.value = "";
        return;
    }

    if (word.indexOf(letter) < 0) {
        guessCount--;
    }

    guesses += letter;
    input.value = "";
    updatePage();
}