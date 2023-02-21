"use strict";


//Вывод по IP привязанного к нему элементу, только 1
const box = document.getElementById("box");

console.log(box)
//Выводит все элементы по тэгу, в данном случае button, выводит данные в массиве)
const buttons = document.getElementsByTagName("button");

console.log(buttons);
//Вывод 1 точной кнопки
const btns = document.getElementsByTagName(`button`);
//Вывод в консоли массиве не получился
console.log(btns);

//Элемент через класс
const circle = document.getElementsByClassName("circle");
console.log(circle);

//Выводим все селекторы
//Помещаем селектор, поэтому ставим точку
// Можно применить метод forEach
//# - Для уникального индификатора
const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item =>{
    console.log(item);
});

const oneHeart = document.querySelector("heart");

console.log(oneHeart);
/*
function ask(question, yes, no){
    if(confirm(question)){
        yes()
    }
    else {
        no()
    };
}
function showOk(){
    alert("Вы согласились.");
}
function showCansel(){
    alert("Вы отказались.");
}

ask("Вы согласны?", showOk,showCansel);
*/

/*
let arr = [1,2,3,4];
//Проверка что это массив
let end = Array.isArray(arr)
console.log(end);


function duplication (a,b,c,d){
    const dupl = [a,b,c,d];
    console.log(dupl, dupl);
}
duplication(2,3,4,7);



 */

