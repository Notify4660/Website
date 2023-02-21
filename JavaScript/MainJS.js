"use strict";
// Правила и тип названия переменных
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const HomeWidth = 200,
    HomeLength = 300;

console.log("Ширина дома:" + HomeWidth + ",длина:" + HomeLength);

//snake_case
//UPPER_SNAKE_CASE
//Kebab-case
//PascalCase

const COLOR_WHITE = "#FFF";

//Класификация типов данных в JS

let number1 = 4.6;
console.log(4/0);

const persone = "Alex";

/* const bool = true/fasle; */

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj ["name"]);
console.log(obj.name);

/* Массив */
let arrs = ["plum.png", "orange.jpg", "apple.bmp",67];

console.log(arrs[3-3]);


/*Объект*/

const object = {a:1, b:2, c:3};


const obj1 = {
    'Anna': 500,
    'Alice': 800
};

console.log(obj1.Alice);

const arrobj = {
    a: 'a',
   '1': 'b',
    2: 'c'
    abc:{
        df:[{},{},],
        def:{

        }
    }
};
const b = 'b'
arrobj[b] = '1234';

console.log(arrobj[b]);




const math = {
    a: 100,
    b: 200,
    c: 300,
    d: -100,
    "ABC": 0
};
console.log(math.a+math.b+math.c+math.d)


const arr = ["a","b","c"];
arr[10] = "3456";
console.log(arr);