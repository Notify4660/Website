"use strict";

const ImgCatalog = {
    black: [
        "../Images/SO5/SO5_Classic_Black_Gold.jpg",
        "../Images/SO5/SO5_Spot_Black.jpg"
    ],
    grey:[
        "../Images/SO5/SO5_Classic_Grey_Choco.jpg",
        "../Images/SO5/SO5_Spot_Grey.jpg"
    ],
    uBlue:[
        "../Images/SO5/SO5_Classic_Ultra.jpg"
    ],
    almond:[
        "../Images/SO5/SO5_Almond_1.jpg"
    ],
    forest:[
        "../Images/SO5/SO5_Classic_Forest.jpg"
    ],
    coral:[
        "../Images/SO5/SO5_Classic_Coral.jpg"
    ],
    moss:[
        "../Images/SO5/SO5_Classic_Moss.jpg"
    ],
    white:[
        "../Images/SO5/SO5_Classic_White_Choco.jpg",
        "../Images/SO5/SO5_White_1.jpg"
    ]
}

const ImgBlack = document.querySelector("#img_black"),
    ImgGrey = document.querySelector("#img_grey"),
    ImgAlmond = document.querySelector("#img_almond"),
    ImgUBlue = document.querySelector("#img_UBlue"),
    ImgForest = document.querySelector("#img_forest"),
    ImgCoral = document.querySelector("#img_coral"),
    ImgWhite = document.querySelector("#img_white"),
    ImgMoss = document.querySelector("#img_moss");

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
    White = document.querySelector("#White"),
    Moss = document.querySelector("#Moss");

function RemoveAnyColor(){
    document.querySelector("#button_1").className = "";
    document.querySelector("#button_2").className = "";
    document.querySelector("#button_3").className = "";
    document.querySelector("#button_4").className = "";
    document.querySelector("#button_5").className = "";
}
button1.style.cssText = "border-radius: 0 25px 0 0";
button2.style.cssText = "display: block; border-radius: 0 0 25px 0";
button3.style.cssText = "display: none";
button4.style.cssText = "display: none";

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_black"){
        ImgBlack.src = ImgCatalog.black[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 0 0"
        button2.style.cssText = "display: block; background: none; border-radius: 0 0 25px 0;";
    }
})

/* Black */
Black.addEventListener("click",e=>{

    RemoveAnyColor();
    document.querySelector("#button_1").classList.add("button1"),
    document.querySelector("#button_2").classList.add("button2");


    ImgBlack.style.cssText = "Display: block";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 0 0"
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";


})

button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1"){
        ImgBlack.src = ImgCatalog.black[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 0 0"
        button2.style.cssText = "display: block; background: none; border-radius: 0 0 25px 0;";
    }
})
button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2"){
        ImgBlack.src = ImgCatalog.black[1];
        button2.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 0 25px 0;"
        button1.style.cssText = "display: block; background: none; border-radius: 0 25px 0 0;";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5"){
        button5.style.cssText = "display: none";
    }
})

/* Grey */
Grey.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_grey"),
        document.querySelector("#button_2").classList.add("button2_grey");


    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: block";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 25px 0 0";
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})
button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_grey"){
        ImgGrey.src = ImgCatalog.grey[0];
        button1.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 25px 0 0";
        button2.style.cssText = "display: block; background: none; border-radius: 0 0 25px 0;";
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_grey"){
        ImgGrey.src = ImgCatalog.grey[1];
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0";
        button2.style.cssText = "display: block; background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 0 25px 0;";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3"){
        button3.style.cssText = "display: none";
    }
})

button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4"){
        button4.style.cssText = "display: none";
    }
})

button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5"){
        button5.style.cssText = "display: none";
    }
})

/* UltraBlue */
UltraBlue.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_UBlue");


    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: block";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";


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
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";

    button1.style.cssText = "background: radial-gradient(circle, rgba(247,229,203,1) 0%, rgba(231,191,135,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none;"
    button3.style.cssText = "display: none;"
    button4.style.cssText = "display: none;"
    button5.style.cssText = "display: none;"

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_almond"){
        button2.style.cssText = "display: none";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_almond"){
        button3.style.cssText = "display: none";
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
    document.querySelector("#button_2").classList.add("button2_forest");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: block";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";

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

/* Coral */

Coral.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_coral");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: block";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: none";

    button1.style.cssText = "background: radial-gradient(circle, rgba(241,191,160,1) 10%, rgba(227,135,79,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgCoral.src = ImgCatalog.coral[0];

})
button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_coral"){
        button2.style.cssText = "display: none";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_coral"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_coral"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_coral"){
        button5.style.cssText = "display: none";
    }
})

/* Moss */

Moss.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_moss");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgMoss.style.cssText = "Display: block";

    button1.style.cssText = "background: radial-gradient(circle, rgba(178,194,175,1) 10%, rgba(114,139,110,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgMoss.src = ImgCatalog.moss[0];
})
button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_moss"){
        button2.style.cssText = "display: none";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_moss"){
        button3.style.cssText = "display: none";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_moss"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_moss"){
        button5.style.cssText = "display: none";
    }
})

/* White */
White.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_white");
    document.querySelector("#button_2").classList.add("button2_white");

    ImgGrey.style.cssText = "Display: none";
    ImgBlack.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgCoral.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: block";
    ImgMoss.style.cssText = "Display: none";

    button1.style.cssText = "background: #e6e6e6; border-radius: 0 25px 0 0;";
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0;";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})
button1.addEventListener("mouseover", e=>{
    if(button1.classList=="button1_white"){
        ImgWhite.src = ImgCatalog.white[0];
        button1.style.cssText = "background: #e6e6e6; border-radius: 0 25px 0 0;";
        button2.style.cssText = "display: block; border-radius: 0 0 25px 0;";
    }
})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_white"){
        ImgWhite.src = ImgCatalog.white[1];
        button1.style.cssText = "background: none; border-radius: 0 25px 0 0;";
        button2.style.cssText = "display: block; background: #e6e6e6; border-radius: 0 0 25px 0;";
    }
})

button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_white"){
        button3.style.cssText = "display: none";
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