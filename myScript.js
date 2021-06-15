const container= document.querySelector(".thumbnail_container");
const slider= document.querySelector(".slider");
const images= container.children;
const noOfImages=images.length;
const containerWidth= container.offsetWidth;
const thumbnailPrev = document.querySelector(".prev_slide");
const imagesInSlide = Math.trunc((slider.offsetWidth-2*thumbnailPrev.offsetWidth)/images[0].offsetWidth);
const slides= Math.ceil(noOfImages/imagesInSlide);
var currentSlide=0;

alert(imagesInSlide);
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

var selector= images[0];
var image_position=0;
selector.style.border= "1px solid white";
function selectImage(element){
	selector.style.border= "none";
	selector = element;
	for(var i=0; i<images.length; i++){
		if(selector==images[i]){
			image_position=i;
		}
	}
	selector.style.border= "1px solid white";
	document.getElementById("imageId").src = selector.src;
}

function prevImage(){
	selector.style.border= "none";
	if(image_position==0){
		image_position=noOfImages-1;
	}else{
		image_position--;
	}
	selector = images[image_position];
	selector.style.border= "1px solid white";
	document.getElementById("imageId").src = selector.src;
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
	selector.style.border= "none";
	if(image_position==noOfImages-1){
		image_position=0;
	}else{
		image_position++;
	}
	selector = images[image_position];
	selector.style.border= "1px solid white";
	document.getElementById('imageId').src = selector.src;
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
