"use strict";

const ImgCatalog = {
    black: [
        "../Images/SO8/SO8_Black_1.jpg",
        "../Images/SO8/SO8_Black_3.jpg"
    ],
    grey:[
        "../Images/SO8/SO8_Grey_1.jpg",
        "../Images/SO8/SO8_Grey_2.jpg"
    ],
    uBlue:[
        "../Images/SO8/SO8_Ultra.jpg"
    ],
    almond:[
        "../Images/SO8/SO8_Almond.jpg"
    ],
    forest:[
        "../Images/SO8/SO8_Forest.jpg"
    ],
    white:[
        "../Images/SO8/SO8_White_1.jpg",
        "../Images/SO8/SO8_White_2.jpg"
    ],
    based:[
        "../Images/SO8/Ceiling+Base+2.jpg",
        "../Images/SO8/Ceiling+Base+LED.jpg"
    ]

}

const ImgBlack = document.querySelector("#img_black"),
    ImgGrey = document.querySelector("#img_grey"),
    ImgAlmond = document.querySelector("#img_almond"),
    ImgUBlue = document.querySelector("#img_UBlue"),
    ImgForest = document.querySelector("#img_forest"),
    ImgWhite = document.querySelector("#img_white"),
    ImgBase1 = document.querySelector("#img_base1"),
    ImgBase2 = document.querySelector("#img_base2");

let button1 = document.querySelector(".button1"),
    button2 = document.querySelector(".button2"),
    button3 = document.querySelector(".button3"),
    button4 = document.querySelector(".button4"),
    button5 = document.querySelector(".button5");

const Black = document.querySelector("#Black"),
    Grey = document.querySelector("#Grey"),
    Almond = document.querySelector("#Almond"),
    UltraBlue = document.querySelector("#UltraBlue"),
    Forest = document.querySelector("#Forest"),
    White = document.querySelector("#White"),
    Base1 = document.querySelector("#base_1"),
    Base2 = document.querySelector("#base_2");


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
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 0 0"
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgBlack.src = ImgCatalog.black[0];
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
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";


    button1.style.cssText = "background: radial-gradient(circle, rgba(218,218,218,1) 0%, rgba(150,150,150,1) 57%); border-radius: 0 25px 0 0";
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgGrey.src = ImgCatalog.grey[0];

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
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";


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


    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: block";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";

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

    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: block";
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";

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
    document.querySelector("#button_2").classList.add("button2_white");

    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: block";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: none";

    button1.style.cssText = "background: #e6e6e6; border-radius: 0 25px 0 0;";
    button2.style.cssText = "display: block; border-radius: 0 0 25px 0;";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

    ImgWhite.src = ImgCatalog.white[0];

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

/* Base */
Base1.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_base1");
    document.querySelector("#button_2").classList.add("button2_base1");

    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: block";
    ImgBase2.style.cssText = "Display: none";

    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_base1"){
        button2.style.cssText = "display: none; ";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_base1"){
        button3.style.cssText = "display: none; ";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_base1"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_base1"){
        button5.style.cssText = "display: none";
    }
})
/* Base LED */

Base2.addEventListener("click",e=>{

    RemoveAnyColor();

    document.querySelector("#button_1").classList.add("button1_base2");
    document.querySelector("#button_2").classList.add("button2_base2");

    ImgBlack.style.cssText = "Display: none";
    ImgGrey.style.cssText = "Display: none";
    ImgAlmond.style.cssText = "Display: none";
    ImgUBlue.style.cssText = "Display: none";
    ImgForest.style.cssText = "Display: none";
    ImgWhite.style.cssText = "Display: none";
    ImgBase1.style.cssText = "Display: none";
    ImgBase2.style.cssText = "Display: block";

    button1.style.cssText = "background: radial-gradient(circle, rgba(145,145,145,1) 0%, rgba(31,31,31,1) 57%); border-radius: 0 25px 25px 0;";
    button2.style.cssText = "display: none";
    button3.style.cssText = "display: none";
    button4.style.cssText = "display: none";
    button5.style.cssText = "display: none";

})

button2.addEventListener("mouseover", e=>{
    if(button2.classList=="button2_base2"){
        button2.style.cssText = "display: none; ";
    }
})
button3.addEventListener("mouseover", e=>{
    if(button3.classList=="button3_base2"){
        button3.style.cssText = "display: none; ";
    }
})
button4.addEventListener("mouseover", e=>{
    if(button4.classList=="button4_base2"){
        button4.style.cssText = "display: none";
    }
})
button5.addEventListener("mouseover", e=>{
    if(button5.classList=="button5_base2"){
        button5.style.cssText = "display: none";
    }
})