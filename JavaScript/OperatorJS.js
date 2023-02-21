"use strict";

console.log('arr'+'-object');
console.log(4 +'5');

/*Инкримент и Дикримент */

let incr = 10,
    decr = 10;
/*Если ++/-- ставяться перед, то префиксные, если после то постфиксные*/


/*incr++; Инкримент Плюс 1*/
/*decr--; Дикримент Минус 1*/

console.log(++incr);
console.log(--decr);

/*Выделить остаток числа*/
console.log(5%2);
/*== Равенство ===Строгое равенство*/
console.log(2*4 === 8);

/*Оператор && - "И" || - "Или"   "!"-Отрицание*/

const isChecked = true,
    isClose = false;
console.log(isChecked && !isClose);
console.log(isChecked || isClose);

console.log(2+2*2!=8);


/*Логические операторы*/
/*
const hamburger = 5;
const fries = 5;
const cola = 5;
const cake = 5;

if(hamburger&&fries&&cola&&cake){
    console.log("Я Объелся!");
}
else if(hamburger&&fries||hamburger&&cola){
    console.log("Я сыт!");
}
else{
    console.log("Я голоден");
}
*/
/*
const hamburger = 2;
const fries = 2;
const cola = 5;
const cake = 5;

if(hamburger >= 3&& fries>=3){
    console.log("Все накушались");
}
else if(hamburger>=3 && fries>=1) {
    console.log("Додайте нам", (3-fries), "Картошки!");
}
else if(hamburger===1 && fries>=3) {
    console.log("Додайте нам", (3-hamburger), "Гамбургера!");
}
else if(hamburger>=2 && fries>=3) {
    console.log("Додайте нам", (3-hamburger), "Гамбургер!");
}
else{
    console.log("Пойдёмте в другое заведение");
}
*/

const hamburger = 4;
const fries = 3;
const cola = "Залупка";
const cake = "Залупка";

if(hamburger>=3&&fries>=3||cola>=2&&cake>=4) {
    console.log(hamburger&&fries||cola&&cake);
}
else{
    console.log("Нихуя");
}
