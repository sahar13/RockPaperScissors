//------------------------------
// Function Definitions
//------------------------------

  //getNumberInRange is a function that takes in two numbers and returns a random number between them
	function getNumberInRange(min, max) {
	  //create a variable called randNumber to hold a random number between max and min
	  var randNumber = Math.floor(Math.random() * (max - min + 1) + min);
	  //return randNumber
	  return randNumber;
	}

  //getComputersHand is a function that takes no parameters but returns a random string that represents a choice between rock, paper or scissors
	function getComputersHand(){
		//set an array to the possible values that the computer can choose
		var compChoices = ["rock", "paper", "scissors"];

		//retrieve a random number between 0 and 2
		var randNum = getNumberInRange(0,2);

		//using randNum, set compHand to a random array value from compChoices
		var compChoice = compChoices[randNum];
		return compChoice;
	}

//------------------------------
// -- game mechanics
//------------------------------

  // create a function that determines the logic for the game's winner and loser, and which uses the user's and computer's choice as parameters
  function gameRound(compVal,userVal) {
    // set a condition for a tie if the compHand and userHand have the same value
    if (compVal == userVal) {
      return "tie";
    }
    // set two conditions where the computer chooses rock and the user chooses something different, and return who wins
    else if (compVal == "rock" && userVal == "paper") {
      return "userWins";
    }
    else if (compVal == "rock" && userVal == "scissors") {
      return "compWins";
    }
    // set two conditions where the computer chooses paper and the user chooses something different, and return who wins
    else if (compVal == "paper" && userVal == "rock") {
      return "compWins";
    }
    else if (compVal == "paper" && userVal == "scissors") {
      return "userWins";
    }
    // set two conditions where the computer chooses scissors and the user chooses something different, and return who wins
    else if (compVal == "scissors" && userVal == "rock") {
      return "userWins";
    }
    else if (compVal == "scissors" && userVal == "paper") {
      return "compWins";
    }
    // set a condition to assess if a user inputs something invalid
    else {
      return false;
    }
  }
	//------------------------------
	// -- game play
	//------------------------------

	// create a welcome message that tells the user the game that's being played and how to stop playing
	alert("Welcome! You and the computer are in a showdown. The aim of the game is to see who will be the ultimate Rock, Paper, Scissors Champ! Remember, you can exit the game at any time by typing 'exit'. Let's begin!");

  // set variables that will calculate the number of rounds played and the points given out
	var rounds = 0;
	var userPoints = 0;
	var compPoints = 0;

	// create a while loop which uses the rules defined in the function gameRound to alert the user of the winner of each round, the most up-to-date score, and how many rounds have passed
	// start by making the while loop continue infinitely as long as the user doesn't type in 'exit'
	while(userHand != "exit") {
		// create a variable for the computer's input and set the value according to the function getComputersHand, which gives a 'random' value to the variable
		var compHand = getComputersHand();
		// for testing purposes, create a variable that alerts the user of the computer's variable and comment it out later to keep the mystery of the game
		//alert("The computer has picked "+compHand+". Now your turn!");
		// create a variable for the user's input and set the value according to what the user enters in a prompt, given the three possible choices
		var userHand = prompt("Rock, paper or scissors?","Enter choice");
		// create a variable that calls on the function gameRound so its return can be easily assessed
		var game = gameRound(compHand,userHand);
		// set the first conditional to make the loop break if the user types 'exit'
		if (userHand == "exit") {
			break;
		}
		// create a conditional for when the function returns a "tie" and alert the user that it's a tie, the final score so far, and how many rounds have been played
		// remember to make the variable rounds increase by 1 since a round has been played
		else if (game == "tie") {
			rounds++;
			alert("It's a tie! The computer also picked " +compHand+ ". You just completed round " +rounds+ ". You have " +userPoints+ " points. The computer has " +compPoints+ " points. Play again, or type 'exit' to see the final score.");
		}
		// create a conditional for when the function returns "userWinds" and alert the user that they won, the final score so far, and how many rounds have been played
		// remember to make the variable rounds increase by 1 since a round has been played
		// remember also to make the variable userPoints increase by 1 since the user won
		else if(game == "userWins") {
			rounds++;
			userPoints++;
			alert("You win! The computer picked " +compHand+ ". You just completed round " +rounds+ ". You have " +userPoints+ " points. The computer has " +compPoints+ " points. Play again, or type 'exit' to see the final score.");
		}
		// create a conditional for when the function returns "compWinds" and alert the user that the computer, the final score so far, and how many rounds have been played
		// remember to make the variable rounds increase by 1 since a round has been played
		// remember also to make the variable compPoints increase by 1 since the computer won
		else if(game == "compWins") {
			rounds++;
			compPoints++;
			alert("You lose! The computer picked " +compHand+ ". You just completed round " +rounds+ ". You have " +userPoints+ " points. The computer has " +compPoints+ " points. Play again, or type 'exit' to see the final score.");
		}
		// create a conditional for when the function returns the boolean false to let the user know their input is invalid
		else if (game == false) {
			alert("Hmm, looks like there's an error. Are you sure you picked rock, paper or scissors?");
		}
	}

//------------------------------
// -- game finish
//------------------------------

	//create conditionals that alerts the user for every outcome of the game, with the final score and the total number of rounds played
	// the first conditional is for when the user wins
	if (userPoints > compPoints) {
		alert("Congratulations! You played " +rounds+ " rounds against the computer and won! The final score is " +userPoints+ " to " +compPoints+ ".");
	}
	// the second conditional is for a tie
	else if (userPoints == compPoints) {
		alert("It's a tie! You played " +rounds+ " rounds against the computer! The final score is " +userPoints+ " to " +compPoints+ ".");
	}
	// the final conditional is for when the computer wins
	else {
		alert("Sorry. You played " +rounds+ " rounds against the computer and lost. The final score is " +userPoints+ " to " +compPoints+ ".");
	}
