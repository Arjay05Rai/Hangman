const POSSIBLE_WORDS = ["pixel", "zigzag", "chocolate", "electricity", "today", "awkward", "apple",
    "defensive", "president"]
var word = "";
var guesses = "";


let newGame = function() {
    //Picks a random word
    let randomInex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomInex];
    guesses = "";
    updatePage();

    //Show Blank Dashes
    updatePage();


}

let updatePage = function() {
        for (i =0; i < word.length;i++) {

        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >=0) {
            clueString+=currentLetter+" ";
        }
        else {
        let clueString = "_";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString; 


    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses : "+guesses;
}

let guessLetter = function() {

    let input = document.getElementById("guess");

    let letter = input.value;
    guess+=letter;

    updatePage();

}