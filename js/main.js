// JavaScript Document
//save the name value from the input into LS



(function() {
	"use strict";
	
	//1 create cons var or array to hold references to DOM objects
	var desc = document.querySelector('#desc'),
	text = document.querySelector("#user"),
	userClick = document.querySelector("#sub"),
	links = document.querySelectorAll(".like span"),
	name = document.querySelector('#submit'),
	clickLike = document.querySelector('.heart'),
	viewMovies = document.querySelector('#viewed p');
	
	
	var thumb1= document.querySelector("#thumb1");
	var thumb2 = document.querySelector("#thumb2");
	var thumb3= document.querySelector("#thumb3");
	var thumb4= document.querySelector("#thumb4");
	var thumb5= document.querySelector("#thumb5");
	var thumb6= document.querySelector("#thumb6");
	var titleBox=document.querySelector("#titleBox");
	var contentBox=document.querySelector("#contentBox");
	
	//2 write code segments in functioms so they can control by calling each function

	function init() {
		//check to see if browser supports LS
		if(typeof Storage !== "undefined") {
			console.log('local storage supported');
			
			//localStorage.clear();
		} else {
			console.log('local storage not supported');
		}
	}
	
	//save the name of user to local storage
	function saveName() {
		var savedName = text.value;
		localStorage.setItem('sname', savedName);
		if(localStorage.getItem('sname') !== null) {
			var savename = localStorage.getItem('sname');
			
			//add name to welcome message and description
			var welcome = document.querySelector('#name').innerHTML = "Welcome " + savename + "!";
			desc.innerHTML = "Alright, "+savename+", now is the most interesting part. Make your home your own theater, choose whatever movie you want from down below and you will know what to download. Oops, I did not say, here is only list of movies, and you gotta find another website to download them from. Good Luck!";
			
	}
	}
	

	function saveMovie(e) {
		//grab the value from the field
		var savedMovie = e.target.id;
			
		//put the string value into the local storage
		localStorage.setItem('smovie', savedMovie);
		
		//save the movie by their name
		if(localStorage.getItem('smovie') !== null) {
			var savemovie = localStorage.getItem('smovie');
			console.log("The movie '" + savemovie + "' is saved");
			
			//create the posters of the movies that were chosen
			var img = document.createElement("IMG");
			img.setAttribute("src", "images/"+savedMovie+".jpg");
			img.setAttribute("width", "304");
			img.setAttribute("height", "450");
			img.setAttribute("alt", "chose movie");
			img.setAttribute("class", "chosenMovies");
			document.querySelector('#viewed').appendChild(img);
			
			viewMovies.innerHTML = "Look, Here you can see the movies that you have chosen.";
			//console.log(savemovie);
		} else{
			console.log('no more movies');
		}
		
	}
	
	//display all the storage with name and movie
	function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
    }
console.log(archive);
//document.querySelector('#show').innerHTML = archive;
    return archive;
}

function handleClick1 () {
	  
	  titleBox.innerHTML ="Revenant";
	  titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML="While exploring the uncharted wilderness in 1823, legendary frontiersman Hugh Glass (Leonardo DiCaprio) sustains injuries from a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his survival skills to find a way back home to his beloved family. Grief-stricken and fueled by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald (Tom Hardy), the former confidant who betrayed and abandoned him.";
	   contentBox.style.fontSize ="1.5em";
	  
} 
 thumb1.addEventListener("click", handleClick1, false);
 
 function handleClick2 () {
	  
	  titleBox.innerHTML ="Taken3";
	  titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML=" Ex-covert operative Bryan Mills (Liam Neeson) and his ex-wife, Lenore (Famke Janssen), are enjoying a reconciliation when Lenore is brutally murdered. Bryan is framed for the crime and flees, with the CIA, FBI and police all in hot pursuit. For the last time, he channels his rage and particular set of skills into hunting down Lenore's real killers, taking his revenge and protecting the one important thing left in his life: his daughter, Kim (Maggie Grace).";
	 contentBox.style.fontSize ="1.5em";
	  
	  
} 
 thumb2.addEventListener("click", handleClick2, false);
 
 function handleClick3 () {
	  
	  titleBox.innerHTML ="batman v superman";
	  titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML=" It's been nearly two years since Superman's (Henry Cavill) colossal battle with Zod (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne (Ben Affleck). Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the Man of Steel.";
	  contentBox.style.fontSize ="1.5em";
	 
	  
} 
 thumb3.addEventListener("click", handleClick3, false);
 
 function handleClick4 () {
	  
	  titleBox.innerHTML ="Finding Dory";
	   titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML=" With help from Nemo and Marlin (Albert Brooks), Dory (Ellen DeGeneres) the forgetful fish embarks on a quest to reunite with her mother (Diane Keaton) and father (Eugene Levy).";
	  contentBox.style.fontSize ="1.5em";
	 
	  
} 
 thumb4.addEventListener("click", handleClick4, false);
 
 function handleClick5 () {
	 
	  titleBox.innerHTML ="The Finest Hours";
	   titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML=" On Feb. 18, 1952, a massive storm splits the SS Pendleton in two, trapping more than 30 sailors inside the tanker's sinking stern. Engineer Ray Sybert bravely takes charge to organize a strategy for his fellow survivors. As word of the disaster reaches the Coast Guard in Chatham, Mass., Chief Warrant Officer Daniel Cluff orders a daring rescue mission. Despite the ferocious weather, coxswain Bernie Webber takes three men on a lifeboat to try and save the crew against seemingly impossible odds.";
	  contentBox.style.fontSize ="1.5em";
	 
	  
} 
 thumb5.addEventListener("click", handleClick5, false);
 
 function handleClick6 () {
	 
	  titleBox.innerHTML ="Ride Along 2";
	   titleBox.style.fontSize ="1.5em";
	  contentBox.innerHTML="Rookie lawman Ben Barber (Kevin Hart) aspires to become a detective like James Payton (Ice Cube), his future brother-in-law. James reluctantly takes Ben to Miami to follow up on a lead that's connected to a drug ring. The case brings them to a homicide detective and a computer hacker who reveals evidence that implicates a respected businessman. It's now up to James and Ben to prove that charismatic executive Antonio Pope is actually a violent crime lord who rules southern Florida's drug trade.";
	   contentBox.style.fontSize ="1.5em";
	  
} 
 thumb6.addEventListener("click", handleClick6, false);
 

	
	//3	create event listeners to link page objects to call back functions
	
	for(var i = 0; i<links.length; i++) {
		links[i].addEventListener("click", saveMovie, true);
	}
	
	window.addEventListener("load", init, false);
	name.addEventListener("click", saveName, false);
	userClick.addEventListener("click", allStorage, false);
	
})();