// JavaScript Document
(function(){
	
//variables
var imageBanner = document.querySelector("#houseImages");
var listItems = document.querySelectorAll(".sigilContainer");
var offSet = 1000;

console.log(listItems);
    imageBanner.style.right = "0px";//stylize the position of container on the right

//functions
function moveBanner(e) { //tell JS to move the images
		imageBanner.style.right = (offSet*this.dataset.offset) + "px";//this means the number for every image from 1 to 5
}

//listeners
for (i=0, len=listItems.length; i<len; i++) {//condition to change images
	 listItems[i].addEventListener("click", moveBanner, false);
 }
}) ();


