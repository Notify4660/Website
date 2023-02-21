"use strict";

const ImgCatalog = {
    black: [
        "../Images/BltCap/CAP+BLT_Small_Black.jpg",
        "../Images/BltCap/BLT+Ceiling.jpg"
    ],
    grey:[
        "../Images/BltCap/CAP_Grey_1.jpg",
        "../Images/BltCap/CAP_4.jpg"
    ],
    uBlue:[
        "../Images/BltCap/CAP+BLT+Big_Ultra_1.jpg",
        "../Images/BltCap/CAP_Ultra_3.jpg",
        "../Images/BltCap/CAP_Ultra_4.jpg",
        "../Images/BltCap/CAP_4.jpg"
    ],
    almond:[
        "../Images/BltCap/CAP+BLT_Big_Almond_1.jpg",
        "../Images/BltCap/CAP+BLT_Small_Almond_3.jpg",
        "../Images/BltCap/BLT_Backl.jpg"
    ],
    forest:[
        "../Images/BltCap/CAP_4.jpg"
    ],
    coral:[
        "../Images/BltCap/CAP+Blt_Coral_Big.jpg"
    ]
}

const ImgBlack = document.querySelector("#img_black"),
    ImgGrey = document.querySelector("#img_grey"),
    ImgAlmond = document.querySelector("#img_almond"),
    ImgUBlue = document.querySelector("#img_UBlue"),
    ImgForest = document.querySelector("#img_forest"),
    ImgCoral = document.querySelector("#img_coral");

let button1 = document.querySelector(".button1"),
    button2 = document.querySelector(".button2"),
    button3 = document.querySelector(".button3"),
    button4 = document.querySelector(".button4"),
    button5 = document.querySelector(".button5");

const Black = document.querySelector("#Black"),
    Grey = document.querySelector("#Grey"),
    Almond = document.querySelector("#Almond"),
    UltraBlue = document.querySelector("#UltraBlue"),
    Coral = document.querySelector("#Coral"),
    Forest = document.querySelector("#Forest");

function RemoveAnyColor(){
    document.querySelector("#button_1").className = "";
    document.querySelector("#button_2").className = "";
    document.querySelector("#button_3").className = "";
    document.querySelector("#button_4").className = "";
    document.querySelector("#button_5").className = "";
}

    button2.style.cssText = "border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";


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
    ImgCoral.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%);"
    button2.style.cssText = "border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgBlack.src = ImgCatalog.black[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1"){
        ImgBlack.src = ImgCatalog.black[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%);"
        button2.style.cssText = "background: none; border-radius: 0 0 25px 0;";

    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2"){
        ImgBlack.src = ImgCatalog.black[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 0 25px 0;"
        button1.style.cssText = "background: none";
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3"){
        button3.style.cssText = "display: none";
        button4.style.cssText = "display: none";
        button5.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4"){
        button3.style.cssText = "display: none";
        button4.style.cssText = "display: none";
        button5.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5"){
        button3.style.cssText = "display: none";
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
    ImgCoral.style.cssText = "Display: none";



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
    ImgCoral.style.cssText = "Display: none";


    button1_almond.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
    button2_almond.style.cssText = "background: none";
    button3_almond.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    button4.style.cssText = "display: none;"
    button5.style.cssText = "display: none;"


    ImgAlmond.src = ImgCatalog.almond[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList == "button1_almond"){
        ImgAlmond.src = ImgCatalog.almond[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none; display: block;";
        button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
        button4.style.cssText = "display: none;"
        button5.style.cssText = "display: none;"
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
        button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
        button4.style.cssText = "display: none;"
        button5.style.cssText = "display: none;"
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_almond"){
        ImgAlmond.src = ImgCatalog.almond[2];
        button3.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 0 25px 0;";
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none";
        button4.style.cssText = "display: none;"
        button5.style.cssText = "display: none;"
    }
    else{
        console.log("ERROR_Almond")
        null
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_almond"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_almond"){
        button5.style.cssText = "display: none";
    }
})

/* UltraBlue */
UltraBlue.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_UBlue");
    document.querySelector("#button_2").classList.add("button2_UBlue");
    document.querySelector("#button_3").classList.add("button3_UBlue");
    document.querySelector("#button_4").classList.add("button4_UBlue");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: block";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";



    button1.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%);"
    button2.style.cssText = "display: block";
    button3.style.cssText = "display: block; border-radius: 0";
    button4.style.cssText = "display: block; border-radius: 0 0 25px 0";
    button5.style.cssText = "display: none";

    ImgUBlue.src = ImgCatalog.uBlue[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_UBlue"){
        ImgUBlue.src = ImgCatalog.uBlue[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%);"
        button2.style.cssText = "background: none; border-radius: 0;"
        button3.style.cssText ="display: block; border-radius: 0";
        button4.style.cssText = "display: block; border-radius: 0 0 25px 0";
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_UBlue"){
        ImgUBlue.src = ImgCatalog.uBlue[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%); border-radius: 0;"
        button1.style.cssText = "background: none"
        button3.style.cssText = "display: block; background: none; border-radius: 0;"
        button4.style.cssText = "display: block; background: none; border-radius: 0 0 25px 0";
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_UBlue"){
        ImgUBlue.src = ImgCatalog.uBlue[2];
        button1.style.cssText =  "background: none;border-radius: 0 25px 0 0 ";
        button2.style.cssText = "background: none; border-radius: 0;"
        button3.style.cssText ="background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%);border-radius: 0;"
        button4.style.cssText = "display: block; border-radius: 0 0 25px 0";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_UBlue"){
        ImgUBlue.src = ImgCatalog.uBlue[3];
        button1.style.cssText =  "background: none;border-radius: 0 25px 0 0 ";
        button2.style.cssText = "background: none; border-radius: 0;"
        button3.style.cssText ="border-radius: 0;"
        button4.style.cssText = "display: block; background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%); border-radius: 0 0 25px 0";
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
    ImgCoral.style.cssText = "Display: none";


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

/* Coral */

Coral.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_coral");
    document.querySelector("#button_2").classList.add("button2_coral")


    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: block";


    button1.style.cssText = "background: radial-gradient(circle, rgba(241,191,160,1) 10%, rgba(227,135,79,1) 57%); border-radius: 0 25px 25px 0;";
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