$(document).ready(function(){

//Have console all variables logged these all and they work!

var List1 = $(".List1");
//console.log(List1); 

var List1Array = [];
List1.each(function() {
	List1Array.push($(this).text());
	console.log(List1Array);
});

//console.log(List1Array); This works it pushes all the text to an array to be compared later. 

// var boyNames = $(".boyNames");
// console.log(boyNames);

// var girlNames = $(".girlNames");
// console.log(girlNames);

// var countries = $(".Countries");
// console.log(countries);

// var gameContainer = $("#gameContainer");
// console.log(gameContainer);

var playerText = $("#playerText");
var submitButton = $("#submitButton");
var myNewTextElement = $("<input type='text' value=''>");

var playerWords = [];
var wrongGuesses = [];

var clickCount = 0;
var counter = 0;
playerOne = prompt("Player one please enter your name?");
console.log(playerOne);

playerTwo = prompt("Player two please enter your name?");
console.log(playerTwo);


//This function shows Grocery List then hides it. 
function showList1(){
	List1.show();
	setTimeout(function(){
		List1.hide();
		//function to pop up instructions - tell user to start entering guesses and hit submit
	}, 10000); 
	}

showList1(); // This calls the showListFunction. 


submitButton.click(function(){ // This function pushes all the players guesses to an array named player words 

		// playerWords.push(playerText.val()); 
		// console.log(playerWords);

// COMPARE ONE ELEMENT AT A TIME WITH THE ARRAY: THIS WORKS could be tidied up but mostly working. 

	console.log(playerText.val());
	
	if(($.inArray(playerText.val(), List1Array)) != -1) {
	    console.log("Correct");
	    playerWords.push(playerText.val());
		counter ++;
		clickCount++
    	console.log(counter);
		console.log(playerWords);
    	
		if(clickCount > List1Array){
			alert("That is the end of your turn, your score is " + counter + " out of 7!");
		    	}
		}
		
	else {console.log("Incorrect, please try again!");
		  wrongGuesses.push(playerText.val());
		  console.log(wrongGuesses);
	}
});


//console.log(List1Array);




	// var length = Math.min(List1Array.length,playerWords.length);
	// var countMatched = 0;
	// var countNotMatched = 0;

	// for(var index=0; index<length;index++){

	//   	if(List1Array[index] == playerWords[index]) {
	//   		countMatched++;	
	//   		alert("You have matched " + countMatched);
	//   		console.log(countMatched);
	    	
	//   	} else {
	//     	countNotMatched++;
	//     	console.log("Sorry try again, thats's not in the list");
	//     }

	//     //console.log(countNotMatched);
	// }


// TEST FOR 


//PROVIDE A SCORE




///////////////////////////////////////////////CODE IS EXECUTING UNTIL HERE
// setTimeout(function(){
// 	checkValueOnce();
// }, 20000); 



// function checkValueOnce() {

// 	var length = Math.min(List1Array.length,playerWords.length);
// 	var countMatched = 0;
// 	var countNotMatched = 0;

// 	for(var index=0; index<length;index++){

// 	  	if(List1Array[index] == playerWords[index]) {
// 	  		countMatched++;	
// 	  	} else {
// 	    	countNotMatched++;
// 	    }
// 	}
// 	// console.log(countMatched);
// 	// console.log(countNotMatched);	
// };

// checkValueOnce();




// function checkValues() {

// 	var length = Math.min(List1Array.length,playerWords.length);
// 	var countMatched = 0,countNotMatched = 0;

// 	for(var index=0; index<length;index++){

//   	if(List1Array[index] == playerWords[index])
//     countMatched++;

//   	else if(playerWords.indexOf(List1Array[index]) >= 0)
//     countNotMatched++;
// }

// alert(countMatched );
// alert(countNotMatched);

// };


});


















