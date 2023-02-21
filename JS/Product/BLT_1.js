"use strict"

const ImgCatalog = {

    black: [
        "../Images/BLT_1/BLT1_Black_31.jpg",
    "../Images/BLT_1/BLT_1_Black_1.jpg",
        "../Images/BLT_1/BLT+Set_2.jpg"
    ],

    grey: [
    "../Images/BLT_1/Ceiling_BLT+Driver+Grey1.jpg",
    "../Images/BLT_1/BLT+Set_21.jpg"
    ],

    almond:[
    "../Images/BLT_1/BLT_1_Almond.jpg",
    "../Images/BLT_1/BLT_1_Almond_2.jpg",
    "../Images/BLT_1/Ceiling_BLT_21.jpg",
    "../Images/BLT_1/BLT_1_2_3_Almond1.jpg",
    "../Images/BLT_1/BLT_Belt.jpg"
    ],
    ultraBlue:[
    "../Images/BLT_1/BLT1_Ultra_1.jpg",
    "../Images/BLT_1/BLT1_2_Ultra_1.jpg"
    ],
    forest:[
    "../Images/BLT_1/BLT_1_Forest_1.jpg"
    ],
};
const ImgBlack = document.querySelector("#img_black"),
 ImgGrey = document.querySelector("#img_grey"),
 ImgAlmond = document.querySelector("#img_almond"),
 ImgUBlue = document.querySelector("#img_UBlue"),
 ImgForest = document.querySelector("#img_forest");

let button1 = document.querySelector("#button_1"),
    button2 = document.querySelector("#button_2"),
    button3 = document.querySelector("#button_3"),
    button4 = document.querySelector("#button_4"),
    button5 = document.querySelector("#button_5");

const Black = document.querySelector("#Black"),
    Grey = document.querySelector("#Grey"),
    Almond = document.querySelector("#Almond"),
    UltraBlue = document.querySelector("#UltraBlue"),
    Coral = document.querySelector("#Coral"),
    Forest = document.querySelector("#Forest")

function RemoveAnyColor(){
    document.querySelector("#button_1").className = "";
    document.querySelector("#button_2").className = "";
    document.querySelector("#button_3").className = "";
    document.querySelector("#button_4").className = "";
    document.querySelector("#button_5").className = "";

    button4.style.cssText = "display: none";
}

/* Black */
Black.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1");
    document.querySelector("#button_2").classList.add("button2");
    document.querySelector("#button_3").classList.add("button3");


    ImgBlack.style.cssText = "Display: block";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%);"
    button2.style.cssText = "background: none";
    button3.style.cssText = "border-radius: 0 0 25px 0";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgBlack.src = ImgCatalog.black[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1"){
        ImgBlack.src = ImgCatalog.black[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%);"
        button2.style.cssText = "background: none";
        button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2"){
        ImgBlack.src = ImgCatalog.black[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%);"
        button1.style.cssText = "background: none";
        button3.style.cssText = "background: none border-radius: 0 0 25px 0;";
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3"){
        ImgBlack.src = ImgCatalog.black[2];
        button3.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 0 25px 0;";
        button1.style.cssText = "background: none";
        button2.style.cssText = "background: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4"){
        button4.style.cssText = "display: none";
        button5.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5"){
        button4.style.cssText = "display: none";
        button5.style.cssText = "display: none";
    }
})

/* Grey */
Grey.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_grey");
    document.querySelector("#button_2").classList.add("button2_grey");
    document.querySelector("#button_3").classList.add("button3_grey");

    let button1_grey = document.querySelector(".button1_grey"),
        button2_grey = document.querySelector(".button2_grey"),
        button3_grey = document.querySelector(".button3_grey");

        ImgGrey.style.cssText = "Display: block";
        ImgBlack.style.cssText = "Display: none";
        ImgAlmond.style.cssText = "Display: none";
        ImgUBlue.style.cssText = "Display: none";
        ImgForest.style.cssText = "Display: none";

    button1_grey.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%);"
         button2_grey.style.cssText = "border-radius: 0 0 25px 0";
         button3.style.cssText = "display: none";
         button4.style.cssText = "display: none";
         button5.style.cssText = "display: none";

    ImgGrey.src = ImgCatalog.grey[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_grey"){
        ImgGrey.src = ImgCatalog.grey[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%);";
        button2.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    }
    else{
        console.log("ERROR_Grey")
        null
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_grey"){
        ImgGrey.src = ImgCatalog.grey[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 0 25px 0;";
        button1.style.cssText = "background: none";
    }
    else{
        console.log("ERROR_Grey")
        null
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_grey"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_grey"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_grey"){
        button5.style.cssText = "display: none";
    }
})


/* Almond */

Almond.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_4").style.cssText = "display: block";
    document.querySelector("#button_5").style.cssText = "display: block; border-radius: 0 0 25px 0";

    document.querySelector("#button_1").classList.add("button1_almond");
    document.querySelector("#button_2").classList.add("button2_almond");
    document.querySelector("#button_3").classList.add("button3_almond");
    document.querySelector("#button_4").classList.add("button4_almond");
    document.querySelector("#button_5").classList.add("button5_almond");

    let button1_almond = document.querySelector(".button1_almond"),
        button2_almond = document.querySelector(".button2_almond"),
        button3_almond = document.querySelector(".button3_almond"),
         button4_almond = document.querySelector(".button4_almond"),
         button5_almond = document.querySelector(".button5_almond");


    ImgAlmond.style.cssText = "display: block";
    ImgBlack.style.cssText = "display: none";
    ImgGrey.style.cssText = "display: none";
    ImgUBlue.style.cssText = "display: none";
    ImgForest.style.cssText = "display: none";


    button1_almond.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
    button2_almond.style.cssText = "background: none";
    button3_almond.style.cssText = "background: none; border-radius: 0";


    ImgAlmond.src = ImgCatalog.almond[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList == "button1_almond"){
        ImgAlmond.src = ImgCatalog.almond[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none";
        button3.style.cssText = "background: none; border-radius: 0;";
        button4.style.cssText = "background: none; display: block;";
        button5.style.cssText = "background: none; display: block; border-radius: 0 0 25px 0;";
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})
button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_almond"){
        ImgAlmond.src = ImgCatalog.almond[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%);";
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button3.style.cssText = "background: none; border-radius: 0;";
        button4.style.cssText = "background: none; display: block;";
        button5.style.cssText = "background: none; display: block; border-radius: 0 0 25px 0;";
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_almond"){
        ImgAlmond.src = ImgCatalog.almond[2];
        button3.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0;";
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none";
        button4.style.cssText = "background: none; border-radius: 0; display: block;";
        button5.style.cssText = "background: none; display: block; border-radius: 0 0 25px 0;";
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_almond"){
        ImgAlmond.src = ImgCatalog.almond[3];
        button4.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); display: block;";
        button1.style.cssText = "background: none;  border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none";
        button3.style.cssText = "background: none; border-radius: 0;";
        button5.style.cssText = "background: none; display: block; border-radius: 0 0 25px 0;";
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_almond"){
        ImgAlmond.src = ImgCatalog.almond[4];
        button5.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); display: block; border-radius: 0 0 25px 0;";
        button1.style.cssText = "background: none;  border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none";
        button3.style.cssText = "background: none; border-radius: 0;";
        button4.style.cssText = "background: none; display: block;";
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})

/* UltraBlue */
UltraBlue.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_UBlue");
    document.querySelector("#button_2").classList.add("button2_UBlue");

    let button1_UBlue = document.querySelector(".button1_UBlue"),
        button2_UBlue = document.querySelector(".button2_UBlue");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: block";
    ImgForest.style.cssText = "Display: none";



    button1_UBlue.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%);"
    button2_UBlue.style.cssText = "border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgUBlue.src = ImgCatalog.ultraBlue[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_UBlue"){
        ImgUBlue.src = ImgCatalog.ultraBlue[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%);"
        button2.style.cssText = "background: none; border-radius: 0 0 25px 0;"
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_UBlue"){
        ImgUBlue.src = ImgCatalog.ultraBlue[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%); border-radius: 0 0 25px 0;"
        button1.style.cssText = "background: none"
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_UBlue"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_UBlue"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_UBlue"){
        button5.style.cssText = "display: none";
    }
})

/* Forest */

Forest.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_forest");

    let button1_forest = document.querySelector(".button1_forest"),
        button2_forest = document.querySelector(".button2_forest");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: block";


    button1_forest.style.cssText = "background: radial-gradient(circle, rgba(117,185,117,1) 10%, rgba(21,100,21,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})


button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_forest"){
        button2.style.cssText = "display: none";
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_forest"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_forest"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_forest"){
        button5.style.cssText = "display: none";
    }
})