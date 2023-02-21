"use strict";
/*
if(2) {
    console.log("Ok!");
}
else{
    console.log("ERROR!");
}


const number = 50;

if(number<49) {
    console.log("Меньше 49");
}
else if (number>100){
    console.log(number);
}
else {
    console.log("Между 49 и 100");
}

3 Аргумента

(number === 50) ? console.log("OK!") : console.log("ERROR!");
*/
const number = 49;

switch(number){
    case 49:
        console.log("OK! 49");
        break;
    case 100:
        console.log("OK! 100");
        break;
    case 50:
        console.log("OK! 50");
        break;
    default:
        console.log("Залупа, Дамы и Господа");
        break
};