$(document).ready(function(){

//Have console all variables logged these all and they work!

var List1 = $(".List1");
//console.log(List1); 

var List1Array = [];
List1.each(function() {
	List1Array.push($(this).text());
	console.log(List1Array);
});

var List2 = $(".list2");
//console.log(List2); 

var List2Array = [];
List2.each(function() {
	List2Array.push($(this).text());
	console.log(List2Array);
});

var List3 = $(".list3");
//console.log(List3); 

var List3Array = [];
List3.each(function() {
	List3Array.push($(this).text());
	console.log(List3Array);
});

var List4 = $(".list4");
//console.log(List3); 

var List4Array = [];
List4.each(function() {
	List4Array.push($(this).text());
	console.log(List4Array);
});

//console.log(List1Array); This works it pushes all the text to an array to be compared later. 

// var boyNames = $(".boyNames");
// console.log(boyNames);

// var girlNames = $(".girlNames");
// console.log(girlNames);

// var countries = $(".Countries");
// console.log(countries);

var gameContainer = $("#gameContainer");
console.log(gameContainer);

var messages = $("#messages");

var playerText = $("#playerText");
var submitButton = $("#submitButton");
var myNewTextElement = $("<input type='text' value=''>");

var playerWords = [];
var wrongGuesses = [];

var clickCount = 0;
var counter = 0;

//Instructions needed here:



// playerOne = prompt("Player one please enter your name?");
// console.log(playerOne);

// playerTwo = prompt("Player two please enter your name?");
// console.log(playerTwo);


//This function shows Grocery List then hides it. 
function showList1(){
	List1.show(function(){
		// gameContainer.css("background", "url(http://www.sparklebox.co.uk/blue/3721-3730/_wp_generated/pp50cce857_1b.jpg) no-repeat"); 
		});
	
	setTimeout(function(){
		List1.hide();
		//function to pop up instructions - tell user to start entering guesses and hit submit
	}, 3000); 
	};

function showList2(){
	List2.show();
	setTimeout(function(){
		List2.hide();
		//function to pop up instructions - tell user to start entering guesses and hit submit
	}, 3000); 
	}


function showList3(){
	List3.show();
	setTimeout(function(){
		List3.hide();
		//function to pop up instructions - tell user to start entering guesses and hit submit
	}, 3000); 
	}

function showList4(){
	List4.show();
	setTimeout(function(){
		List4.hide();
		//function to pop up instructions - tell user to start entering guesses and hit submit
	}, 3000); 
	}

// showList1(); // This calls the showListFunction - lists and shown and hidden.  
// setTimeout(showList2, 10000);
// setTimeout(showList3, 20000);
// setTimeout(showList4, 30000);
// setTimeout(randomPlay, 40000);


// Randomly ask user for inputs

	function listGenerator(number) {
	    if (number === 1) {
	        return List1Array;
	    } else if (number === 2) {
	        return List2Array;
	    } else if (number === 3) {
	        return List3Array;
	    } else if (number === 4){
	        return List4Array;
	    } 
	}

	function pickAList(){
	    var randomNumber = Math.random();
	    if (randomNumber < 0.24) {
	        return 1;
	    } else if (randomNumber < 0.49) {	    	
	        return 2;
	    } else if (randomNumber < 0.75) {
	        return 3;
	    } else {
	        return 4;
	    } 
	}

	function displayQuestion(number) {
	    if (number ===1) {
	    	messages.html("Please enter as many items from the Grocery List");
	    } else if (number === 2) {
	    	messages.html("Please enter as many boys names as you can remember");
	    } else if (number === 3) {
	    	messages.html("Please enter as many girls names as you can remember");
	    } else if (number ===4){
	    	messages.html("Please enter as many country names as you can remember");
	    } 
	}

var thisGameAnswerNumber = pickAList(); 	
var thisGameAnswerArray = listGenerator(thisGameAnswerNumber);

function checkWins(){
submitButton.click(function(){ // This function pushes all the players guesses to an array named player words 

// COMPARE ONE ELEMENT AT A TIME WITH THE ARRAY: THIS WORKS could be tidied up but mostly working. 

	console.log(playerText.val());
	
	if(($.inArray(playerText.val(), thisGameAnswerArray)) != -1) {
	    console.log("Correct");
	    playerWords.push(playerText.val());
		counter ++;
		clickCount++
    	console.log(counter);
		console.log(playerWords);
    	
		if(clickCount == List1Array.length){
			messages.html("That is the end of your turn, your score is " + counter + "/7!");
		    	}
		}
		
	else {console.log("Incorrect, please try again!");
		  wrongGuesses.push(playerText.val());
		  console.log(wrongGuesses);
		  clickCount++;
		  console.log(clickCount);

		  if(clickCount == List1Array.length){
		  	messages.html("That is the end of your turn, your score is " + counter + "/7!");
		      	}
		}
	});
}


function startGame(){
	var thisGameAnswerNumber = pickAList(); 
	var thisGameAnswerArray = listGenerator(thisGameAnswerNumber);

	showList1(); // This calls the showListFunction - lists and shown and hidden.  
	setTimeout(showList2, 3000);
	setTimeout(showList3, 6000);
	setTimeout(showList4, 90000);
	setTimeout(function(){displayQuestion(thisGameAnswerNumber)}, 12000);
	checkWins();
}

startGame();



});


















