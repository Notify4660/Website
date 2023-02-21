"use strict"
/*
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
 */
const overlay = document.querySelector(".overlay");
    //только 1 событие(работает последнее)
/*
for(let i = 0; i<=4; i++){
    btns[i].onclick = function (){
        alert(`Кнопка ${i+1}`);
    }
}
 */
//Добавляем обработчик событий, Будет слидить за событием если мы выполним условие
//Через обработик может работать 2 и более событий
/*
btns[0].addEventListener("click", (e) =>{
    e.target.remove();
});
*/
//let i = 0;
const del = (e) =>{
    console.log(e.currentTarget);
    //Для примера остановка отправки данных
    //i++
    //if(i==1){
   //     btns[0].removeEventListener("click", del);
   // }
}
btns[0].addEventListener("click", del, {once:true});
//overlay.addEventListener("click", del);

const link = document.querySelector('a');
//Отменяет стандартное поведение браузера
link.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(event.target);
})

//Опции событий
//options(Capture,once,passive,SystemGroup) = boolean
//target.addEventListener(type, listener[, options]);
