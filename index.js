 let words = ["sand", 
 "identification"
 ,"monkey"
 ,"pedestrian"
 ,"image"
 ,"lonely"
 ,"anticipation"
 ,"lifestyle"
 ,"reason"
 ,"endure"
 ,"spy"
 ,"place"
 ,"hill"
 ,"distortion"
 ,"gloom"
 ,"window"
 ,"socialist"
 ,"brain"
 ,"fame"
 ,"dressing"
 ,"digress"
 ,"functional"
 ,"work"
 ,"yard"
 ,"headline"
 ,"mail"
 ,"portion"
 ,"claim"
 ,"pie"
 ,"plot"]

 let lives = 6; // Initial lives count
let randomIndex = getRandomNumber(0, words.length); // Random index value based on word array size

printLives();// Print lives to html

let word = words[randomIndex]; // Random word from array

let blank = "";

for (let i = 0; i < word.length; i++) {
  // Add blank underscore and space to the amount of letters
  blank = blank + "_ ";
}
printBlank(); // Print out the underscores function defined at line #81
console.log(word); // Print the random word to the console

//When the submit button is pressed
function process() {
  // Do not do anything if lives are equal or below 0 (i.e do thing if have lives)
  if (lives > 0) {
    let input = $("#userInput").val(); //get User input
    let found = false; // To be used later to indicate if a letter was found
    // if the user input only has 1 letter
    if (input.length === 1) {
      // Go through all the letters in the random word
      for (let i = 0; i < word.length; i++) {
        // if the "user letter" is the same as the letter in "word" at index "i"
        if (word[i] == input) {
          placeBlank(i, input); // replace the "blank" with the "user letter"
          found = true; // since we found out that this letter is somewhere in the "word", we found something
        }
      }
      // If we found the "user letter" in the "word"
      if (found) {
        // and if the "blank" does not have any underscores (i.e all the letters were guessed)
        if (blank.match("_") == null) {
          $("#lives").html("YOU WIN!! \ (•◡•) /"); // Our win condition. They guessed all the letters
        }
      }
      // The "User letter" was not found in the "word"
      else {
        lives--; // So minus 1 life
        //if all lives are gone, print the Lose message
        if (lives === 0) {
          $("#lives").html("YOU LOSE!! ¯\_(ツ)_/¯");
        }
        // if there are lives left (not equal to 0)
        else {
          printLives(); // print the lives again, since we lost 1 life but lives are not 0.
        }
      }
    }
  }

  $("#userInput").val(""); // Clear the user input field so it is blank for the next input
  printBlank(); // Print our new blank after the letter have been added or any updates have been made to it.
}

// Generate a random number between two numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//print lives
function printLives() {
  $("#lives").html(`Lives: ${lives}`);
}
//Print blank variable to html
function printBlank() {
  $("#blankWord").html(blank);
}

//Place the user input in the blank at the correct index
function placeBlank(index, replacement) {
  blank =
    blank.substr(0, index * 2) +
    replacement +
    blank.substr(index * 2 + replacement.length);
}