const POSSIBLE_WORDS = ["pixel", "zigzag", "chocolate", "electricity", "today", "awkward", "apple",
    "defensive", "president"]



let newGame = function() {
    //Picks a random word
    let randomInex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomInex];

    //Show Blank Dashes
    
    for (i =0; i < word.length;i++) {
        let clueString= "_";
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString; 

}