
// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// Dark Mode

const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const texts = [

    "Frontend Developer",

    "Web Designer"

];


let index = 0;

const typing = document.querySelector(".typing");


function changeText(){

    typing.textContent = texts[index];

    index++;

    if(index >= texts.length){

        index = 0;

    }

}


changeText();

setInterval(changeText, 2000);


