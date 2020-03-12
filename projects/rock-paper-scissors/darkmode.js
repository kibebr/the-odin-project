var switchBtn = document.getElementById("light-switch");
var texts = document.querySelectorAll("h1, h2, p, li");
var dark_mode = false;

switchBtn.addEventListener("click", function(){

	if(!dark_mode){

		texts.forEach(text => {
			if(!text.classList.contains("darkmode-dont"))
				text.style.color = "white";
		} );

		document.body.style.backgroundColor = "black";
		switchBtn.innerHTML = "light-mode? =)";
		dark_mode = true;
	}
	else{
		texts.forEach(text => {
			if(!text.classList.contains("darkmode-dont"))
				text.style.color = "black";
		} );

		document.body.style.backgroundColor = "white";
		switchBtn.innerHTML = "dark-mode? =)";
		dark_mode = false;
	}

});

