"use strict";

let a = 5,
    b = a;

b = b+5;

console.log(b);
console.log(a);

const obj = {
    a:5,
    b:1
};
/*
const copy = obj; //Передача по ссылке

copy.a = 10;
copy.b = 18;

console.log(copy);
console.log(obj);
*/
function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
//Поверхостная структура копирутся, а вложенная является так же ссылочной и меняется с оригиналом
const number = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(number);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(number);

//Object.assign - Метод соединение нескольких объектов, так же является независимой копии объекта, можно внести в пустой объект данные.

const add = {
    d: 17,
    e: 15
};

console.log(Object.assign(number,add));

const  clone = Object.assign({},add);

clone.d = 20;
console.log(add);
console.log(clone);



//Метод slice копирует массив, поверхостная копия

const oldArray = ['a','b','c'];

const newArray = oldArray.slice();

newArray[0] = 'apa';
console.log(newArray);
console.log(oldArray);

//Оператор разворота ... - троеточие. ES9 
const Video = ['Youtube','Rutube'],
    blogs = ['wordpress','blogger'],
    internet = [...Video,...blogs,'vk','facebook'];

console.log(internet);


function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a','b','c','d','e'];

const NewArray = [...array];

const q = {
    one: 1,
    two: 2,
    three: 3
};

const NEWObj = {...q};

console.log(NEWObj);