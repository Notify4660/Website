"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);

/*
if(block){
    console.log(block.textContent);
}
 */

//? - может предотврадить оишбку, если нету данного запроса он его пропустит

console.log(block?.textContent);

console.log(1+2);


const userData = {
    name: 'Gleb',
    age: null,
    say: function () {
        console.log("Hello!");
    }
}
userData.say();

userData.hey?.();
//?. - полная конструкция, перед другими символами

//if(userData && userData.skills && userData.skill.js){
//    console.log(userData.skills.js);
//}


console.log(userData?.skills?.js);




//querySelector - Живая коллекция, отображает текущее состояние дерева
//getElements - коллекция взятая с верстки, нельзя изменить

const boxesQuery = document.querySelectorAll('.heart');
const boxesGet = document.getElementsByClassName('box');


boxesQuery.forEach(box=>{
    if (box.matches('.this'))
        console.log('This one!');
})

console.log(boxesQuery);
console.log(boxesGet);


