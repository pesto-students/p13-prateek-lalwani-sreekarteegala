
function getPromptText(numGuesses) {
    if (numGuesses === 0) {
        return "Enter a number between 1 and 100.";
    } else {
        return "Enter a number.";
    }
}

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;

    while (numGuesses < totalGuesses) {
        let userGuess = prompt(getPromptText(numGuesses));

        if (userGuess === null) {
            return 0; // User Pressed Cancel
        }

        if (userGuess === "") {
            alert("Please enter a number.");
            continue;
        }

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
            continue;
        }

        userGuess = parseInt(userGuess);

        if (userGuess < numToGuess) {
            alert(userGuess + " is too small. Guess a larger number.");
            numGuesses++;
        } else if (userGuess > numToGuess) {
            alert(userGuess + " is too large. Guess a smaller number.");
            numGuesses++;
        } else {
            numGuesses++;
            return numGuesses;
        }
    }

    return 0; // User couldn't guess within allowed guesses
}

const numToGuess = 5;
const totalGuesses = 10;
const result = playGuessingGame(numToGuess, totalGuesses);
if (result === 0) {
    alert("Sorry, you couldn't guess the number within " + totalGuesses + " attempts.");
} else {
    alert("Congratulations! You guessed the number " + numToGuess + " in " + result + " attempts.");
}
