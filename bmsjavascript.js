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


// Section1 sliderbutton

document.getElementById("s1rightarrow").addEventListener("click", function () {
  document.querySelector(".section1").style.left = "-100%";
  document.getElementById("s1rightarrow").style.display = "none";
  document.getElementById("s1leftarrow").style.display = "flex";
});

document.getElementById("s1leftarrow").addEventListener("click", function () {
  document.querySelector(".section1").style.left = "0";
  document.getElementById("s1rightarrow").style.display = "flex";
  document.getElementById("s1leftarrow").style.display = "none";
});