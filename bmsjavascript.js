// siginbutton
document.getElementById("signinbtn").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
});

document.getElementById("closebtn").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});

// menubar
document.getElementById("menubtn").addEventListener("click", function () {
  document.querySelector(".menucontainer").style.right = "0";
  document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(".menucontainer1").addEventListener("click", function () {
  document.querySelector(".menucontainer").style.right = "-100%";
  document.querySelector("body").style.overflow = "auto";
});

// Menulogin
document.getElementById("menulogin").addEventListener("click", function () {
  document.querySelector(".menucontainer").style.right = "-100%";
  document.querySelector(".popup").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";

});


// Section1 sliderbutton
document.getElementById("s1rightarrow").addEventListener("click", function () {
  document.querySelector(".section1").style.left = "-100%";
  document.getElementById("s1rightarrow").style.display = "none";
  // document.getElementById("s1leftarrow").style.display = "flex";
  setTimeout(slidetimeleft, 800)
  document.querySelector(".s1second").style.display = "flex";
});
function slidetimeleft() {
  document.getElementById("s1leftarrow").style.display = "flex";
}

document.getElementById("s1leftarrow").addEventListener("click", function () {
  document.querySelector(".section1").style.left = "0%";
  document.getElementById("s1leftarrow").style.display = "none";
  // document.getElementById("s1rightarrow").style.display = "flex";
  setTimeout(slidetimeright, 800)
  document.querySelector(".s1second").style.display = "none";
});
function slidetimeright() {
  document.getElementById("s1rightarrow").style.display = "flex";
}


// section2 sliderbutton
document.getElementById("s2rightarrow").addEventListener("click", function () {
  document.getElementById("section2").style.left = "-100%";
  document.getElementById("s2rightarrow").style.display = "none";
  setTimeout(slidetimeleft2, 800)
  document.getElementById("s2second").style.display = "flex";
});
function slidetimeleft2() {
  document.getElementById("s2leftarrow").style.display = "flex";
}

document.getElementById("s2leftarrow").addEventListener("click", function () {
  document.getElementById("section2").style.left = "0%";
  document.getElementById("s2leftarrow").style.display = "none";
  setTimeout(slidetimeright2, 800)
  document.getElementById("s2second").style.display = "none";
}); function slidetimeright2() {
  document.getElementById("s2rightarrow").style.display = "flex";
}


// section3 sliderbutton
document.getElementById("s3rightarrow").addEventListener("click", function () {
  document.getElementById("section3").style.left = "-100%";
  document.getElementById("s3rightarrow").style.display = "none";
  setTimeout(slidetimeleft3, 800)
  document.getElementById("s3second").style.display = "flex";
});
function slidetimeleft3() {
  document.getElementById("s3leftarrow").style.display = "flex";
}

document.getElementById("s3leftarrow").addEventListener("click", function () {
  document.getElementById("section3").style.left = "0%";
  document.getElementById("s3leftarrow").style.display = "none";
  setTimeout(slidetimeright3, 800)
  document.getElementById("s3second").style.display = "none";
});
function slidetimeright3() {
  document.getElementById("s3rightarrow").style.display = "flex";
}

// Ad1 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("ad1mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// section4 sliderbutton
document.getElementById("s4rightarrow").addEventListener("click", function () {
  document.getElementById("section4").style.left = "-100%";
  document.getElementById("s4rightarrow").style.display = "none";
  setTimeout(slidetimeleft4, 800)
  document.getElementById("s4second").style.display = "flex";
});
function slidetimeleft4() {
  document.getElementById("s4leftarrow").style.display = "flex";
}

document.getElementById("s4leftarrow").addEventListener("click", function () {
  document.getElementById("section4").style.left = "0%";
  document.getElementById("s4leftarrow").style.display = "none";
  setTimeout(slidetimeright4, 800)
  document.getElementById("s4second").style.display = "none";
}); function slidetimeright4() {
  document.getElementById("s4rightarrow").style.display = "flex";
}
