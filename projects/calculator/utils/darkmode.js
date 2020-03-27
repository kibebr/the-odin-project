const DarkMode = (function(){

	(function init(){
		this.button = document.getElementById("dark-mode");
		this.root = document.documentElement;
		if(!this.button || !this.root)
			throw new Error("CAN'T LOAD DARK-MODE");
	}) ();

	function refresh(){
		if(localStorage.getItem('on') == "false"){
			root.style.setProperty('--black', 'white');
			root.style.setProperty('--white', 'black');
		}
		else{
			root.style.setProperty('--black', 'black');
			root.style.setProperty('--white', 'white');	
		}	
	}

	this.button.onclick = function(){
		if(localStorage.getItem("on") == "true"){
			localStorage.setItem("on", "false");
		}
		else{
			localStorage.setItem("on", "true");
		}

		refresh();
	}

	refresh();
}) ();
