"use strict";
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes); Позволяет получить все узлы
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//Можно добавить Element и запросить элементы
//console.log(document.querySelector("#current").parentNode.parentNode); parentNode - возвращает на шаг назад к родителю
//console.log(document.querySelector('[data-current = "3"]').nextSibling); nextSibling к следущему соседу, previousSibling к предыдушем соседу
//console.log(document.querySelector('[data-current = "3"]').nextElementSibling);nextElementSibling к следущему элементу, previousElementSibling

for(let node of document.body.childNodes){
    if (node.name == "#text") {
        continue;
    }
    console.log(node);
}