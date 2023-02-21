"use strict";


function scrollTo(element){
    window.scroll({
        top: element.offsetTop,
        behavior: "smooth"
    })
}

const button = document.querySelector(".anchor");
const main = document.querySelector("#main");

button.addEventListener("click", () => {
    scrollTo(main);
});

