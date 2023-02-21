"use strict";
let Img = document.querySelector("#image1>img");
let Img2 = document.querySelector("#image2>img");
let ImgNumber = 1;
const setImg = [
    "../Images/SO8/SO8_Black_1.jpg",
    "../Images/SO8/SO8_Grey_1.jpg",
    "../Images/SO8/SO8_White_1.jpg"
]
const setImg2 = [
    "../Images/CapWall/BlackCapWall2.jpg",
    "../Images/CapWall/ForestCapWall2.jpg",
    "../Images/CapWall/WhiteCapWall2.jpg"
]
let dot1 = document.querySelector(".dot_1");
let dot2 = document.querySelector(".dot_2");
let dot3 = document.querySelector(".dot_3");
let dot4 = document.querySelector(".dot_4");
let dot5 = document.querySelector(".dot_5");
let dot6 = document.querySelector(".dot_6");

dot1.style.cssText = "background-color: #dea082;"


dot1.addEventListener("mouseover", e =>{
    if(ImgNumber != 1){
        Img.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img.src = setImg[0]
            Img.style.cssText = "animation-name: ShowImg;"
        }

        dot1.style.cssText = "background-color: #dea082;"
        dot2.style.cssText = "background-color: none;"
        dot3.style.cssText = "background-color: none;"
        ImgNumber = 1;
    }

})

dot2.addEventListener("mouseover", e =>{

    if(ImgNumber != 2){
        Img.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img.src = setImg[1]
            Img.style.cssText = "animation-name: ShowImg;"
        }

        dot2.style.cssText = "background-color: #dea082;"
        dot3.style.cssText = "background-color: none;"
        dot1.style.cssText = "background-color: none;"
        ImgNumber = 2;
    }
})

dot3.addEventListener("mouseover", e =>{
    if(ImgNumber != 3){
        Img.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img.src = setImg[2]
            Img.style.cssText = "animation-name: ShowImg;"
        }

        dot3.style.cssText = "background-color: #dea082;"
        dot1.style.cssText = "background-color: none;"
        dot2.style.cssText = "background-color: none;"
        ImgNumber = 3;
    }
})



dot4.style.cssText = "background-color: #dea082;"

dot4.addEventListener("mouseover", e =>{
    if(ImgNumber != 4){
        Img2.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img2.src = setImg2[0]
            Img2.style.cssText = "animation-name: ShowImg;"
        }

        dot4.style.cssText = "background-color: #dea082;"
        dot5.style.cssText = "background-color: none;"
        dot6.style.cssText = "background-color: none;"
        ImgNumber = 4;
    }
})
dot5.addEventListener("mouseover", e =>{
    if(ImgNumber != 5){
        Img2.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img2.src = setImg2[1]
            Img2.style.cssText = "animation-name: ShowImg;"
        }

        dot5.style.cssText = "background-color: #dea082;"
        dot4.style.cssText = "background-color: none;"
        dot6.style.cssText = "background-color: none;"
        ImgNumber = 5;
    }
})

dot6.addEventListener("mouseover", e =>{
    if(ImgNumber != 6){
        Img2.style.cssText = "animation-name: HiddenImg;"

        setTimeout(ChangeImg,300);

        function ChangeImg (){
            Img2.src = setImg2[2]
            Img2.style.cssText = "animation-name: ShowImg;"
        }

        dot6.style.cssText = "background-color: #dea082;"
        dot4.style.cssText = "background-color: none;"
        dot5.style.cssText = "background-color: none;"
        ImgNumber = 6;
    }
})


/*Animation мини блоков*/

const Imgs = document.querySelectorAll(".img > img");
const reImg = [
    "../Images/Bevel/Bevel_Black_Gold.jpg",
    "../Images/Bevel/Bevel_Coral.jpg",

    "../Images/BLT_1/BLT1_Black_3.jpg",
    "../Images/BLT_1/BLT1_2_Ultra_1.jpg",

    "../Images/SpottyPendant/Spotty+P_Grey.jpg",
    "../Images/SpottyPendant/Spotty+P_Ultra_1.jpg"
]

Imgs[0].addEventListener("mouseover", e =>{
    Imgs[0].src = reImg[1]

})

Imgs[0].addEventListener("mouseout", e =>{
    Imgs[0].src = reImg[0]

})




Imgs[1].addEventListener("mouseover", e =>{
    Imgs[1].src = reImg[3]

})
Imgs[1].addEventListener("mouseout", e =>{
    Imgs[1].src = reImg[2]
})




Imgs[2].addEventListener("mouseover", e =>{
    Imgs[2].src = reImg[5]
})

Imgs[2].addEventListener("mouseout", e =>{
    Imgs[2].src = reImg[4]
})


const reImg2 = [
    "../Images/SO5/SO5_Classic_Grey_Choco.jpg",
    "../Images/SO5/SO5_Classic_Moss.jpg",

    "../Images/BltCap/CAP+BLT_Big_Almond_1.jpg",
    "../Images/BltCap/CAP+BLT_Big_Forest.jpg",

    "../Images/Corner/Corner+Big_White_2S.jpg",
    "../Images/Corner/Corner+Big_Grey_3S.jpg"
];


Imgs[3].addEventListener("mouseover", e =>{
    Imgs[3].src = reImg2[1]
})

Imgs[3].addEventListener("mouseout", e =>{
    Imgs[3].src = reImg2[0]
})


Imgs[4].addEventListener("mouseover", e =>{

    Imgs[4].src = reImg2[3]
})

Imgs[4].addEventListener("mouseout", e =>{
    Imgs[4].src = reImg2[2]
})


Imgs[5].addEventListener("mouseover", e =>{
    Imgs[5].src = reImg2[5]
})

Imgs[5].addEventListener("mouseout", e =>{
    Imgs[5].src = reImg2[4]
})


// Анимация вслывающих окон при скроле

const animItems = document.querySelectorAll("._anim_items");

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(){

        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeigh - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint)&& pageYOffset <(animItemOffset + animItemHeight)){
                animItem.classList.add("_active");
            }else{
                if(!animItem.classList.contains("_anim_stop")){
                    animItem.classList.remove("_active");
                }

            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
