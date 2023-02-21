"use strict";
//Основы ООП, прототипно-орентированное наследие
let str = 'some';
let strObj = new String(str)

console.log(typeof(str));
console.log(typeof(strObj));

console.log ([1,2,3]);

const soldier = {
    health: 100,
    armor: 100,
    Attack: 20,
    AttackSpeed: "0.5h/s",
    Sayhello: function (){
        console.log("Hello");
    }
};
// Мы создаем новый объект hero, который будет наседоваться от объекта soldier
//Object.create для создание связей !!!Важно
const hero = Object.create(soldier);
/*
const hero = {
    health: 400,
    armor: 200,
    ColdResistence: "75%",
    FireResistence: "75%",
    LightingResistence: "75%",
    Attack: 50,
    AttackSpeed: "1.5h/s"
};
//Устаревшая техника присваевания через прототип структуру(корень)
//hero.__proto__ = soldier;

//Правильная версия
//Object.setPrototypeOf(hero,soldier);


 */


