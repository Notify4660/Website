"use strict";


/*Смена изображений для Каталога*/
/*BLT*/

const image = document.querySelectorAll("img"),
    theme = document.querySelector(".theme");

const imageNewSet_BLT = [
    "../Images/BLT_1/BLT1_2_Ultra_1.jpg",
    "../Images/BLT_2/BLT2_Ultra_2(re).jpg",
    "../Images/BLT_3/BLT3_Coral_1.jpg",
    "../Images/BLT_4/Combo_2.jpg",
    "../Images/BltCap/CAP_Ultra_3.jpg",
    "../Images/BLT_hook/BLT+Hook_Forest.jpg",
    "../Images/BLT_table/BLT+Side_Grey.jpg"
],
    imageOldSet_BLT = [
    "../Images/BLT_1/BLT1_Black_3.jpg",
    "../Images/BLT_2/BLT2_Black_1(re).jpg",
    "../Images/BLT_3/BLT3_Grey.jpg",
    "../Images/BLT_4/Combo_3.jpg.",
    "../Images/BltCap/CAP_Grey_1.jpg",
    "../Images/BLT_hook/BLT+Hook_Black.jpg",
    "../Images/BLT_table/BLT+Side_Black.jpg"
];

const imageNewSet_CAP = [
    "../Images/Cap/CAP_Small_White.jpg",
    "../Images/BltCap/CAP+BLT_Big_Forest.jpg",
    "../Images/CapWall/WhiteCapWall2.jpg"

],
    imageOldSet_CAP = [
    "../Images/Cap/CAP+Small_Grey_1.jpg",
    "../Images/BltCap/CAP+BLT_Big_Almond_1.jpg",
    "../Images/CapWall/ForestCapWall2.jpg"
];

const imageNewSet_Corner = [
        "../Images/Corner/Corner+Big_Grey_3S.jpg",
        "../Images/CornerWall/Corner_Wall_Almond.jpg"
],
    imageOldSet_Corner = [
        "../Images/Corner/Corner+Big_White_2S.jpg",
        "../Images/CornerWall/Corner_Wall_Moss_1.jpg"
];

const imageNewSet_SO = [
        "../Images/SO5/SO5_Classic_Black_Gold.jpg",
        "../Images/SO6/SO6_Black_1.jpg",
        "../Images/SO8/SO8_White_1.jpg"
    ],
    imageOldSet_SO = [
        "../Images/SO5/SO5_Classic_Forest.jpg",
        "../Images/SO6/SO6_White_1.jpg",
        "../Images/SO8/SO8_Black_1.jpg"
    ];
const imageNewSet_Other = [
        "../Images/Bevel/Bevel_Coral.jpg",
        "../Images/Plate/Plate_Classic_BlackS.jpg",
        "../Images/PUD/PUD_3.jpg",
        "../Images/Radius/Radius_Forest.jpg",
        "../Images/SpottyPendant/Spotty+P_Ultra_1.jpg",
        "../Images/Stick/Stick_Ultra.jpg",
        "../Images/TopTop/TopTop_Grey_5.jpg"


    ],
    imageOldSet_Other = [
        "../Images/Bevel/Bevel_White_Natural.jpg",
        "../Images/Plate/Plate_Classic_UltraS.jpg",
        "../Images/PUD/PUD_2.jpg",
        "../Images/Radius/Radius_Black_Gold.jpg",
        "../Images/SpottyPendant/Spotty+P_Grey.jpg",
        "../Images/Stick/Stick_Black.jpg",
        "../Images/TopTop/TopTop_Grey_4.jpg"

    ];




if(theme.textContent == "BLT Collection"){
    for(let i=0; i < imageNewSet_BLT.length; i++){
        image[i].addEventListener("mousemove", e=>{
            image[i].src=imageNewSet_BLT[i];
        })
        image[i].addEventListener("mouseout", e=>{
            image[i].src=imageOldSet_BLT[i];
        })
    }
}

if(theme.textContent == "CAP Collection"){
    for(let t=0; t < imageNewSet_CAP.length; t++){
        image[t].addEventListener("mousemove", e=>{
            image[t].src=imageNewSet_CAP[t];
        })
        image[t].addEventListener("mouseout", e=>{
            image[t].src=imageOldSet_CAP[t];
        })
    }
}

if(theme.textContent == "Corner Collection"){
    for(let t=0; t < imageNewSet_Corner.length; t++){
        image[t].addEventListener("mousemove", e=>{
            image[t].src=imageNewSet_Corner[t];
        })
        image[t].addEventListener("mouseout", e=>{
            image[t].src=imageOldSet_Corner[t];
        })
    }
}

if(theme.textContent == "SO Collection"){
    for(let i=0; i < imageNewSet_SO.length; i++){
        image[i].addEventListener("mousemove", e=>{
            image[i].src=imageNewSet_SO[i];
        })
        image[i].addEventListener("mouseout", e=>{
            image[i].src=imageOldSet_SO[i];
        })
    }
}

if(theme.textContent == "Other Collections"){
    for(let i=0; i < imageNewSet_Other.length; i++){
        image[i].addEventListener("mousemove", e=>{
            image[i].src=imageNewSet_Other[i];
        })
        image[i].addEventListener("mouseout", e=>{
            image[i].src=imageOldSet_Other[i];
        })
    }
}