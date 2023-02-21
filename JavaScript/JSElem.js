"use strict";
/* const a = document.getElementById(`Cube`);
console.log(a);

const circle = document.getElementsByClassName("circle");
console.log(circle);

const c = document.getElementsByTagName("p");
console.log(c);

let elements= document.querySelectorAll(".Cube");
console.log(elements);

let heart = document.querySelectorAll(".heart");
heart.background = "red";
console.log(heart[0]);

let name = document.getElementById("1");
console.log(name);

const btn = document.getElementsByTagName("button");
*/

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');




const Qube = "Кубик";
if(box.textContent === Qube){
    box.style.backgroundColor = "pink";
}else{
    box.style.backgroundColor = "grey";
}

//box.style.width = "150px";
box.style.cssText = 'background-color: blue; width: 150px';

btns[0].style.borderRadius = "100%";
btns[1].style.borderTopColor = "green";
btns[2].style.borderRadius = '10%';
btns[3].style.borderColor = "pink";
btns[4].style.borderWidth = "5px";

circle[0].style.background = 'purple';
//Циклы почти не использует
/*for(let i=0; i <hearts.length; i++){
    hearts[i].style.backgroundColor = "black";
};

 */
//Методом forEach
hearts.forEach(item =>{
    item.style.backgroundColor = "whiteblue";
} );

const div = document.createElement("div");
//Почти не используют
//const text = document.createTextNode("Нота");

//Создаем блок div
div.classList.add("berry");
//document.body.append("div");
//Добавить в конец и путь
//append - в конец
//prepend -в начало
document.body.append(div);
//Через id к элементу
//hearts[0].before(div); - перед первого .hearts
//hearts[0].after(div); - после первого .hearts

//circle[0].remove(); -удаление

//hearts[1].replaceWith(circle[0]); - замена 2 сердце на 1 круг

//Записывает информацию в добавленный элемент(Информация может идти от пользователя, могут ввести инЪекцию или скрипт)
div.innerHTML = "<h1>Hello!!!</h1>";

//Только текст textContent
//div.textContent = "<h1>Hello!!!</h1>";

//afterbegin - в начало, beforbegin - перед, beforeend в конец элемента, afterend - после элемента
div.insertAdjacentHTML('afterend','<h2>Кукусики</h2>');
