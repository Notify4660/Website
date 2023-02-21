"use strict";

// To String

// 1) Устаревшее   !!! При сложении со строкой, всегда будет строка
console.log(typeof (String(null)));
console.log(typeof (String(4)));
// 2)
console.log(typeof(null + ""));

let num = 7777777;
console.log ("https://vk.com/id" + num);

const fontSize = 26 + 'px';

// To Number

// 1) Устаревшее
console.log(typeof (Number(4)));

// 2)
console.log(typeof(+"5"));

//3)

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("hello", "");


//To boolean

// 0,null,"",undefined,Nan; - False данные
//1
let switcher = null;

if(switcher){
    console.log("Working ...");
}
//True и все работает
switcher = 1;

if(switcher){
    console.log("Working ...");
}

//2)
console.log(typeof(Boolean("4")));

//3
console.log(typeof(!!"4444"));