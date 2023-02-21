"use strict"
/*
let block = document.querySelector("#img_block");
let img = document.querySelector(".img_screen");
let text = document.querySelector("#text");
block.addEventListener("mousemove", function (e){

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    img.setAttribute("style","margin-left:"+ x * 100 +"px;" + "margin-top:" + y * 100 +"px;")

});
block.addEventListener("mouseout", function (e){
    img.setAttribute("style","margin-left:"+ 0 +"px;" + "margin-top:" + 0 +"px;")
});

*/

const infoName = document.querySelectorAll(".info_block > a");
const ColorName = document.querySelectorAll(".info_block h3");
const ColorNumber = document.querySelectorAll(".info_block span")
const SwitchImg = document.querySelector(".img_screen");
console.log(ColorName[1])

infoName[0].addEventListener("mouseenter", function (e){
    SwitchImg.src = "../Images/Apartment/BEZ06921-HDR.jpg";
    ColorName[0].style.cssText = "Color:#e8ac8a;",
    ColorName[1].style.cssText = "Color:white;";
    ColorName[2].style.cssText = "Color:white;";
    ColorName[3].style.cssText = "Color:white;"
})

infoName[1].addEventListener("mouseenter", function (e){
    SwitchImg.src = "../Images/Apartment/BEZ07034.jpg",
    ColorName[1].style.cssText = "Color:#e8ac8a;",
    ColorName[0].style.cssText = "Color:white;",
    ColorName[2].style.cssText = "Color:white;",
    ColorName[3].style.cssText = "Color:white;"
})

infoName[2].addEventListener("mouseenter", function (e){
    SwitchImg.src = "../Images/Apartment/BEZ06909-HDR.jpg";
    ColorName[2].style.cssText = "Color:#e8ac8a;",
    ColorName[0].style.cssText = "Color:white;";
    ColorName[1].style.cssText = "Color:white;";
    ColorName[3].style.cssText = "Color:white;"
})

infoName[3].addEventListener("mouseenter", function (e){
    SwitchImg.src = "../Images/Apartment/BEZ07123-HDR.jpg";
    ColorName[3].style.cssText = "Color:#e8ac8a;",
    ColorName[0].style.cssText = "Color:white;";
    ColorName[1].style.cssText = "Color:white;";
    ColorName[2].style.cssText = "Color:white;"
})


