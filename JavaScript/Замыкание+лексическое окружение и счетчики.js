"use strict";
/*
let number = 5;

function logNumber(){
    console.log(number);
}

number = 6;

logNumber();

*/


function creatCounter(){
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}

const increment = creatCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

/*
[] + false - null + true //NaN = Строка - число

    let y = 1;
    let x = y = 2;
    alert(x);  //2

[] + 1 + 2 //string + 1 + 2 = "12"

alert("1"[0]) //1

2&&1&&null&&0&&undefined //Идут по очереди, "И" запинается на лжи, поэтому null

!!(a&&b) (a&&b) // 1 число стало булиновым, они не равны

//"И" запинается на лжи &&
//"Или" запинается на правде ||
alert(null || 2 && 3 || 4); //3

a=[1,2,3];
b=[1,2,3];
 //Не равны, но индентичны

alert(+"infinity"); //infinity но стало числовым типом данных

"Ёжик" > "Яблока" // Нет,смрипеит по Юникоду 0401<044;


0 || "" || 2 || undiferent || true || false // 2, работает до первой лжи/false
 */
