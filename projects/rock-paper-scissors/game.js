/*
  
  0 - rocks
  1 - paper
  2 - scissors

*/

var Game = (function()
{
    var DOM = {
	game_choices : document.querySelectorAll("li"),
	status : document.getElementById("status-text"),
	
	userWins : document.getElementById("user-stats"),
	cpuWins : document.getElementById("cpu-stats")
    }
    
    let userWins = 0;
    let cpuWins = 0;

    for(let user_choice_id = 0; user_choice_id < 3; ++user_choice_id)
    {
	
	DOM.game_choices[user_choice_id].onclick = function play()
	{

	    let cpuChoice = () => { return Math.floor(Math.random() * (2 - 0 + 1)) + 0 };

	    
	    renderStats(cpuChoice(), user_choice_id);
	    
	}

	function renderStats(cpuChoice, userChoice)
	{
	    
	    console.log("cpuChoice: " + cpuChoice);
	    
	    if(cpuChoice == userChoice){ // check for a tie
		DOM.status.style.color = "black";
		DOM.status.innerHTML = "tie!";
		return;
	    }

	    if( (userChoice == 0 && cpuChoice == 2) || (userChoice == 1 && cpuChoice == 0) || (userChoice == 2 && cpuChoice == 1) ){ // if won
		DOM.status.innerHTML = "win!";
		DOM.status.style.color = "green";
		++userWins;
		DOM.userWins.innerHTML = userWins;
	    }
	    else{ // if lost
		DOM.status.innerHTML = "lose!";
		DOM.status.style.color = "red";
		++cpuWins;
		DOM.cpuWins.innerHTML = cpuWins;
	    }	    
	}}
    
    
    
}) ();
 
