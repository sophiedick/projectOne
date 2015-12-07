$(document).ready(function() {

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

	var List4Array = [];
	List4.each(function() {
		List4Array.push($(this).text());
		console.log(List4Array);
	});

	//console.log(List1Array); This works it pushes all the text to an array to be compared later. 

	var boyNames = $(".boyNames");
	// console.log(boyNames);

	var girlNames = $(".girlNames");
	// console.log(girlNames);

	var countries = $(".Countries");
	// console.log(countries);

	var gameContainer = $("#gameContainer");
	// console.log(gameContainer);

	var messages = $("#messages");

	var playerText = $("#playerText");
	var submitButton = $("#submitButton");
	var myNewTextElement = $("<input type='text' value=''>");

	var playerWords = [];
	var wrongGuesses = [];

	var clickCount = 0;
	var counter = 0;
	var gameCount = 0;
	var playerOneTurn = true;

	//Instructions needed here:

	playerOne = prompt("Player one please enter your name?");
	console.log(playerOne);
	$("#player1Name").html(playerOne);

	playerTwo = prompt("Player two please enter your name?");
	console.log(playerTwo);
	$("#player2Name").html(playerTwo);


	//This function shows Grocery List then hides it. 
	function showList1(){
		List1.show();
		$(".listContainer").animate({left: "+=1200"}, 2000);
		$(".listContainer").animate({left: "-=1200"}, 2000);
		$(".listContainer").animate({left: "+=1200"}, 2000);
		$(".listContainer").animate({left: "-=1200"}, 2000);
		$(".listContainer").animate({left: "+=1200"}, 2000);
		$(".listContainer").animate({left: "-=1200"}, 2000);
		setTimeout(function(){
			List1.hide();
			//function to pop up instructions - tell user to start entering guesses and hit submit
		}, 10000); 
	}


	function showList2(){
		List2.show();
		$(".listContainer2").animate({left: "+=1200"}, 2000);
		$(".listContainer2").animate({left: "-=1200"}, 2000);
		$(".listContainer2").animate({left: "+=1200"}, 2000);
		$(".listContainer2").animate({left: "-=1200"}, 2000);
		$(".listContainer2").animate({left: "+=1200"}, 2000);
		$(".listContainer2").animate({left: "-=1200"}, 2000);
		$(".listContainer2").animate({left: "+=1200"}, 2000);
		$(".listContainer2").animate({left: "-=1200"}, 2000);

		setTimeout(function(){
			List2.hide();
			//function to pop up instructions - tell user to start entering guesses and hit submit
		}, 10000); 
	}


	function showList3(){
		List3.show();
		$(".listContainer3").animate({left: "+=1200"}, 2000, "swing");
		$(".listContainer3").animate({left: "-=1200"}, 2000);
		$(".listContainer3").animate({left: "+=1200"}, 2000);
		$(".listContainer3").animate({left: "-=1200"}, 2000);
		$(".listContainer3").animate({left: "+=1200"}, 2000);
		$(".listContainer3").animate({left: "-=1200"}, 2000);
		$(".listContainer3").animate({left: "+=1200"}, 2000);
		$(".listContainer3").animate({left: "-=1200"}, 2000);
		setTimeout(function(){
			List3.hide();
			//function to pop up instructions - tell user to start entering guesses and hit submit
		}, 10000); 
	}

	function showList4(){
		List4.show();
		$(".listContainer4").animate({left: "+=1200"}, 2000, "swing");
		$(".listContainer4").animate({left: "-=1200"}, 2000);
		$(".listContainer4").animate({left: "+=1200"}, 2000);
		$(".listContainer4").animate({left: "-=1200"}, 2000);
		$(".listContainer4").animate({left: "+=1200"}, 2000);
		$(".listContainer4").animate({left: "-=1200"}, 2000);
		$(".listContainer4").animate({left: "+=1200"}, 2000);
		$(".listContainer4").animate({left: "-=1200"}, 2000);
		setTimeout(function(){
			List4.hide();
			//function to pop up instructions - tell user to start entering guesses and hit submit
		}, 10000); 
	}

	//ANIMATION FUNCTIONALITY\



	function makeNewPosition(){
	    
	    // Get viewport dimensions (remove the dimension of the div)
	    var h = $(window).height() - 50;
	    var w = $(window).width() - 50;
	    
	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);
	    
	    return [nh,nw];    
	    
	}

	function animateDiv(){
	    var newq = makeNewPosition();
	    $('.listContainer').animate({ top: newq[0], left: newq[1] }, function(){
	      animateDiv();        
	    });
	    
	};





	// function animation(){
	// 	$(".listContainer").slide(left: "250px");
	// }

	// animation();
	// Randomly ask user for inputs

	// var thisGameAnswerNumber = pickAList(); 	
	// var thisGameAnswerArray = listGenerator(thisGameAnswerNumber);

	var thisGameAnswerNumber; 	
	var thisGameAnswerArray;

	function listGenerator(number) {
	    if (number === 1) {
	        return List1Array;
	    } else if (number === 2) {
	        return List2Array;
	    } else if (number === 3) {
	        return List3Array;
	    } else if (number === 4) {
	        return List4Array;
	    } 
	}

	function pickAList() {
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
    	messages.html("Please enter as many items as you can remember from the Grocery List");
    } else if (number === 2) {
    	messages.html("Please enter as many boys names as you can remember");
    } else if (number === 3) {
    	messages.html("Please enter as many girls names as you can remember");
    } else if (number ===4){
    	messages.html("Please enter as many country names as you can remember");
    } 
	}

	// var thisGameAnswerNumber = pickAList(); 	
	// var thisGameAnswerArray = listGenerator(thisGameAnswerNumber);
	submitButton.click(function() {
		checkWins(thisGameAnswerNumber); 
	});

	function checkWins(number) { 
		// This function pushes all the players guesses to an array named player words 
		// COMPARE ONE ELEMENT AT A TIME WITH THE ARRAY: THIS WORKS could be tidied up but mostly working. 
		// console.log(playerText.val());
		console.log(thisGameAnswerArray);
		var gameArray = listGenerator(number);
		
		if (($.inArray(playerText.val(), gameArray)) != -1) {	
			// console.log(thisGameAnswerArray);
		  messages.html("Correct");
		  playerText.val("");

		  playerWords.push(playerText.val());

			counter++;
			// $("#player1Scoreboard").html(counter);
			clickCount++;
			console.log(clickCount);
	    console.log(counter);
			console.log(playerWords);

			if (clickCount == List1Array.length) {	
				messages.html("That is the end of your turn, your score is " + counter + "/7!");
				gameCount++;
				updateScore();
				console.log(gameCount);

				playerOneTurn = !playerOneTurn;

	    	if (gameCount % 2 != 0) {
					console.log("test");
			    resetBoard();	
			  }
			}
		} else {
			messages.html("Incorrect, please try again!");
			wrongGuesses.push(playerText.val());
			console.log(wrongGuesses);
			clickCount++;
			gameCount++;
			updateScore();
			console.log(clickCount);

			if (clickCount == List1Array.length) {
			  messages.html("That is the end of your turn, your score is " + counter + "/7!");
				//playerOneTurn = !playerOneTurn;
    		if(gameCount % 2 != 0) {
		    	resetBoard();
				}
			}
		}
	};
	
	function updateScore(){
		if (playerOneTurn == true) {
			$("#player1Scoreboard").html(counter);
		}else {
			$("#player2Scoreboard").html(counter);
		}
	}

	function resetBoard(){
		messages.html(playerTwo + " you're up! Get memorising");
		thisGameAnswerNumber = pickAList(); 
		thisGameAnswerArray = listGenerator(thisGameAnswerNumber);
		console.log(thisGameAnswerNumber);
		console.log("RESET");
		// $("#player1Scoreboard").html(counter);
		counter = 0;
		clickCount = 0;
		// console.log(clickCount);
		// console.log(counter);
		playerWords = [];
		console.log(playerWords);
		// if (playerOneTurn != playerOneTurn) {
		showList1(); // This calls the showListFunction - lists and shown and hidden.  
		setTimeout(showList2, 10000);
		setTimeout(showList3, 20000);
		setTimeout(showList4, 30000);
		setTimeout(function(){
		// 	console.log(thisGameAnswerNumber);
			displayQuestion(thisGameAnswerNumber);
			// checkWins(thisGameAnswerNumber);
		}, 40000);	
		console.log("test");
		//showPlayer2Score();	
			// if (clickCount == List1Array.length){
			// 	console.log("test");
		
		
		//}
	}
		
		//}	

	// function showPlayer2Score(){
	//  $("#player2Scoreboard").html(counter);
	// }

//showPlayer2Score();
	


	function startGame(){
		thisGameAnswerNumber = pickAList(); 
		thisGameAnswerArray = listGenerator(thisGameAnswerNumber);
		console.log(thisGameAnswerNumber);
		
		showList1(); // This calls the showListFunction - lists and shown and hidden.  
		setTimeout(showList2, 10000);
		setTimeout(showList3, 20000);
		setTimeout(showList4, 30000);

		setTimeout(function(){
			console.log(thisGameAnswerNumber);
			displayQuestion(thisGameAnswerNumber);
			// checkWins(thisGameAnswerNumber);
		}, 40000);
		// $("#player1Scoreboard").html(counter);
	}

	startGame();
});


















