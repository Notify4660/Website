"use strict";

const ImgCatalog = {
    black: [
        "../Images/SpottyPendant/Spotty_BlackBlack.jpg",
        "../Images/SpottyPendant/Ceiling+Base_Black.jpg"
    ],
    grey:[
        "../Images/SpottyPendant/Spotty+P_Grey.jpg"
    ],
    uBlue:[
        "../Images/SpottyPendant/Spotty+P_Ultra_1.jpg"
    ],
    almond:[
        "../Images/SpottyPendant/Spotty+P_Almond_2.jpg",
        "../Images/SpottyPendant/Spotty+P_Almond_3.jpg",
        "../Images/SpottyPendant/Ceiling+Base_Almond.jpg"
    ],
    forest:[
        "../Images/SpottyPendant/Spotty+P_Forest.jpg"
    ],
    white:[
        "../Images/SpottyPendant/Spotty+P_1.jpg"
    ]
}

const ImgBlack = document.querySelector("#img_black"),
    ImgGrey = document.querySelector("#img_grey"),
    ImgAlmond = document.querySelector("#img_almond"),
    ImgUBlue = document.querySelector("#img_UBlue"),
    ImgForest = document.querySelector("#img_forest"),
    ImgCoral = document.querySelector("#img_coral"),
    ImgWhite = document.querySelector("#img_white");

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
    Forest = document.querySelector("#Forest"),
    White = document.querySelector("#White");

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
    ImgWhite.style.cssText = "Display: none";


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

    let button1_grey = document.querySelector(".button1_grey");

    ImgGrey.style.cssText = "Display: block";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";



    button1_grey.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 25px 25px 0";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_grey"){
        button2.style.cssText = "display: none";
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

/* UltraBlue */
UltraBlue.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_UBlue");


    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: block";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(122,122,255,1) 0%, rgba(33,33,191,1) 57%); border-radius: 0 25px 25px 0"
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_UBlue"){
        button2.style.cssText = "display: none";
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


/* Almond */


Almond.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_almond");
    document.querySelector("#button_2").classList.add("button2_almond");
    document.querySelector("#button_3").classList.add("button3_almond");
    document.querySelector("#button_4").classList.add("button4_almond");
    document.querySelector("#button_5").classList.add("button5_almond");

    let button1_almond = document.querySelector(".button1_almond"),
        button2_almond = document.querySelector(".button2_almond"),
        button3_almond = document.querySelector(".button3_almond");

    ImgAlmond.style.cssText = "display: block";
    ImgBlack.style.cssText = "display: none";
    ImgGrey.style.cssText = "display: none";
    ImgUBlue.style.cssText = "display: none";
    ImgForest.style.cssText = "display: none";
    ImgWhite.style.cssText = "Display: none";

    button1.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
    button2.style.cssText = "background: none;";
    button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    button4.style.cssText = "display: none;"
    button5.style.cssText = "display: none;"


    ImgAlmond.src = ImgCatalog.almond[0];
})

button1.addEventListener("mouseover", e=>{
    if(button1.classList == "button1_almond"){
        ImgAlmond.src = ImgCatalog.almond[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none;";
        button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    }
})
button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_almond"){
        ImgAlmond.src = ImgCatalog.almond[1];
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%);";
        button3.style.cssText = "background: none; border-radius: 0 0 25px 0;";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_almond"){
        ImgAlmond.src = ImgCatalog.almond[2];
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button2.style.cssText = "background: none;";
        button3.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 0 25px 0;";
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


/* Forest */

Forest.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_forest");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: block";
    ImgWhite.style.cssText = "Display: none";

    button1.style.cssText = "background: radial-gradient(circle, rgba(117,185,117,1) 10%, rgba(21,100,21,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_forest"){
        button2.style.cssText = "display: none; ";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_forest"){
        button3.style.cssText = "display: none; ";
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

/* White */
White.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_white");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: block";

    button1.style.cssText = "background:white; border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_white"){
        button2.style.cssText = "display: none; ";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_white"){
        button3.style.cssText = "display: none; ";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_white"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_white"){
        button5.style.cssText = "display: none";
    }
})