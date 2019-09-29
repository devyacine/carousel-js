'use strict';
//describe the variable

const buttonPrevious = document.querySelector(".previous");
const buttonNext = document.querySelector(".next");
const li = document.querySelectorAll("li");
let position = 0;




function nextImage() {
    position++;
    if (position === li.length) {
        position = 0;
    }

    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active")
    };

    li[position].classList.add("active");

}

function previousImage() {
    li[position].classList.remove("active")
    if (position > 0) {
        position--;
    } else {
        position = li.length - 1;
    }
    li[position].classList.add("active");

};







buttonNext.addEventListener("click", nextImage);
buttonPrevious.addEventListener("click", previousImage);