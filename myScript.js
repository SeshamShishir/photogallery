const container= document.querySelector(".thumbnail_container");
const slider= document.querySelector(".slider");
const images= container.children;
const noOfImages=images.length;
const thumbnailPrev = document.querySelector(".prev_slide");
const imagesInSlide = Math.trunc((slider.offsetWidth-2*thumbnailPrev.offsetWidth)/images[0].offsetWidth);
const slides= Math.ceil(noOfImages/imagesInSlide);
var currentSlide=0;

container.style.width= slides*slider.offsetWidth + "px";

function nextSlide(){
	if(currentSlide<(slides-1)){
		currentSlide++;
		container.style.marginLeft= -(imagesInSlide*images[0].offsetWidth)*(currentSlide)+20+"px";
	}else{
		currentSlide=0;
		container.style.marginLeft= -(imagesInSlide*images[0].offsetWidth)*(currentSlide)+20+"px";
	}
}

function prevSlide(){
	if(currentSlide>0){
		currentSlide--;
		container.style.marginLeft= -(imagesInSlide*images[0].offsetWidth)*(currentSlide)+20+"px";
	}else{
		currentSlide=(slides-1);
		container.style.marginLeft= -(imagesInSlide*images[0].offsetWidth)*(currentSlide)+20+"px";
	}
}

var currentImage= images[0];
var image_position=0;
currentImage.style.border= "1px solid white";
function selectedImage(element){
	currentImage.style.border= "none";
	currentImage = element;
	for(var i=0; i<images.length; i++){
		if(currentImage==images[i]){
			image_position=i;
		}
	}
	currentImage.style.border= "1px solid white";
	document.getElementById("imageId").src = currentImage.src;
}

function prevImage(){
	currentImage.style.border= "none";
	if(image_position==0){
		image_position=noOfImages-1;
	}else{
		image_position--;
	}
	currentImage = images[image_position];
	currentImage.style.border= "1px solid white";
	document.getElementById("imageId").src = currentImage.src;
	if(Math.trunc((image_position)/imagesInSlide)!=currentSlide){
		if(Math.trunc((image_position)/imagesInSlide)>currentSlide){
			for(i=0; Math.trunc((image_position)/imagesInSlide)!=currentSlide; i++){
				nextSlide();
			}
		}
		if(Math.trunc((image_position)/imagesInSlide)<currentSlide){
			for(i=0; Math.trunc((image_position)/imagesInSlide)!=currentSlide; i++){
				prevSlide();
			}
		}
	}
}

function nextImage(){
	currentImage.style.border= "none";
	if(image_position==noOfImages-1){
		image_position=0;
	}else{
		image_position++;
	}
	currentImage = images[image_position];
	currentImage.style.border= "1px solid white";
	document.getElementById('imageId').src = currentImage.src;
	if(Math.trunc((image_position)/imagesInSlide)!=currentSlide){
		if(Math.trunc((image_position)/imagesInSlide)>currentSlide){
			for(i=0; Math.trunc((image_position)/imagesInSlide)!=currentSlide; i++){
				nextSlide();
			}
		}
		if(Math.trunc((image_position)/imagesInSlide)<currentSlide){
			for(i=0; Math.trunc((image_position)/imagesInSlide)!=currentSlide; i++){
				prevSlide();
			}
		}
	}
}
