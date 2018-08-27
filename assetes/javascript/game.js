
var wordBank = ["christina", "miley", "taylor", "bruno", "selena", "justin", "michael", "jennifer", "eminem", "rihanna", "katy", "adele", "lady", "demi", "usher", "pitbull", "mark", "steven", "chris", "jojo", "akon", "ashley", "enrique", "adam", "niki", "avri", "shakira", "vanessa", "willow", "jaden", "snoop"];
var wins = 0;
var losses = 0;
var guessesLeft = 14;
var underScores= [];
var userGuesses = [];
var wrongLetter = [];
var  guessesholder = [];
var randomWord;



//================================================Functions=============================================

window.onload = function(){

function startGame(){
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);
    for (var i = 0;i<randomWord.length;i++){

       underScores.push("_");       
    }

    document.getElementById("user-input").textContent = underScores.join(" ");
    wrongLetter = [];
    guessesLeft = 14;
    document.getElementById("guesses-remainig").textContent = guessesLeft;
    document.getElementById("winCount").textContent = wins;
    document.getElementById("loseCount").textContent = losses;
    

};

document.onkeyup = function(event){
    userGuesses = event.key;
    //check if the letter exist inside of the word
    if(randomWord.indexOf(userGuesses)> -1){
        for(var i = 0;i< randomWord.length;i++){
            if(randomWord[i] === userGuesses){
                underScores[i]=userGuesses;
                guessesholder[i] = userGuesses;
                 document.getElementById("user-input").textContent = guessesholder.join("");
                 wins++;    
                          
            }
            
        }
         
        console.log("correct guesse: " + userGuesses);
    }
    else{
      wrongLetter.push(userGuesses);
      guessesLeft--;
      console.log("incorrect guesses: " + userGuesses);
    }
    document.getElementById("letters-guessed").textContent = wrongLetter;
}


//============================Main==============================
startGame();





}


































// //=====================================VARIABLES=====================================//
// var wins = 0;
// var placeholderArray = [];
// var prevPlaceholderArray = [];
// var wordPlaceholder = [];
// var lettersGuessed = [];
// var word = [];
// var wordPlaceholderString = "";
// var userInput = "";
// var correctGuessCount = 0;
// var guessesLeft = 13;



// //=====================================FUNCTIONS=====================================//
// // Hangman objects
// var hangman = {
//     wordBank =["christina", "miley", "taylor", "bruno", "selena", "justin", "michael", "jennifer", "eminem", "rihanna", "katy", "adele", "lady", "demi", "usher", "pitbull", "mark", "steven", "chris", "jojo", "akon", "ashley", "enrique", "adam", "niki", "avri", "shakira", "vanessa", "willow", "jaden", "snoop"],
//     letters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

//     winCount = 0,
//     lossesCount = 0,
//     gussesLeft = 14,
//     randonWord = "", // Generated by computer
//     randomWordLetters = [],// store letters of the random word generated by computer
//     userInput: "",// 
//     letterGuessed = [], //letters already guessed by the user
//     wordWithMatchedLetters: "",
//     computerWordLength: 0,
//     matchedLettersCount: 0,
//     gameOver: false,
//     winOrLose: false,
// };


//     // startGame: function () {
//     //     this.lives = 14;
//     //     this.userInputs = [];
//     //     this.matchedLettersCount = 0;
//     //     this.userInput = "";
//     //     this.wordWithMatchedLetters = "";
//     //     this.gameOver = false;
//     //     this.winOrLose = false;
//     //     this.randomWord = this.guessAWord();
//     //     this.computerWordLength = this.calculateWordLength();

//     //     var initialWordToPrint = this.createInitialWordToPrint();
//     //     this.printWord(initialWordToPrint);

//     //     // set elements
//     //     document.querySelector("#loadingMessage").innerHTML = "";
//     //     document.querySelector("#lives").innerHTML = this.lives;
//     //     document.querySelector("#winCount").innerHTML = winCount;
//     //     document.querySelector("#loseCount").innerHTML = loseCount;
//     //     document.querySelector("#winLose").style.display = 'inline-block';
//     //     document.querySelector("#hangman-img").src = 'assets/images/animals.png';
//     // },

//     // Generate a randon word function
//     function generateRandomWord() {
//     // Generate a random number
//     var randomNum = Math.floor(Math.random() * 36);

//     //Assign the randomNum to the word in the WordBank
//     this.randomWord = this.wordBank[randomNum];

//     //split the randomWord into array of characters
//     this.randomWordLetters = this.randomWord.split("");
// };




//     document.onkeyup = function (event) {
//         console.log("This is the key entered", event.key);
//         var input;

//         if (typeof event != "undefined") {
//             input = event.key;
//             userInput =input.tolowerCase();
//             console.log(userInput + "should match the key");
//             // // Track user guesses over time.
//             // trackLetterGuesses(userInput);

//             // // Build hangman word based on new user input.
//             // buildWord(userInput);
//         }



// function userGuessedLetters(){
// for (i=0;i<letterGuessed.length; i++){
//     if(userInput == letterGuessed[i]){
//         return;
//     }
// }



// }






//     };

//         // Builds hangman word as user guesses letters.
//     function buildWord(userInput) {

//             // Initialize placeholder array to underscore placeholder.
//             if (prevPlaceholderArray.length == 0) {
//         placeholderArray = createWordPlaceholder(word);

//         // Makes it possible to see letters and underscores.
//     } else {
//         placeholderArray = prevPlaceholderArray;
//     }

//     // Replace underscore with matching letter.
//     for (var i = 0; i < word.length; i++) {
//         console.log('Word is ' + word);
//         if (userInput == word[i]) {
//             console.log(userInput + " is in word at " + i);
//             //
//             placeholderArray[i] = userInput;
//         }
//     }

//     prevPlaceholderArray = placeholderArray;

//     // Convert placeholder array to string for display in UI.
//     placeholder = placeholderArray.join(" ");
//     document.getElementById('word-placeholder').innerHTML = placeholder;

//     console.log("Placeholder Array length is " + placeholderArray.length);
//     console.log("Placeholder split is " + placeholder.split(","));
//     console.log("Word join is " + word.join(" "));

//     // User wins when placeholder matches word.
//     if (placeholder.split(',') == word.join(" ")) {
//         console.log("Woot");
//         wins++;
//         playAudio();
//         document.getElementById('win-count').innerHTML = wins;
//         restartGame();
//     }
//     };











// // startGame: function () {
// //     if (gameOver === false && isAlphanet()) {
// //         checkRules()
// //     }

// // },
// // //check if input is a letter
// // isAlphanet: function () {
// //     var alph = /[a-z]/i;
// //     return this.userInputs.match(alph);
// // },

// // creatUnderscre: function() {
// //     for (var i = 0; i < randomWord.length; i++) {
// //         if (this.randomWord.charAt(i).tolowerCase() == this.userInputs) {
// //             if (i === 0) {

// //             }
// //         }
// //     }
// // },

// // checkLetterAlreadyTried: function() {
// //     if (userInputs)
// // },




// // function startGame() {
// //     getStarted = true;
// // },



// // userInput = document.getElementById("user-input");

// // document.onkeyup = function (event) {
// //     userInput.textcontent = event.key;
// // };

// // document.getElementById("get-started").innerHTML = ("wins" + this.win + " Losses" + this.losses);
// // document.getElementById("user-input").innerHTML = this.currentGuesses.join(" ");
// // document.getElementById("guesses-remainig").innerHTML = this.guessesRemaining;
// // document.getElementById("letters-guessed").innerHTML = this.incorrectGuesses;
