"use strict";

//length получить кол-во элементов
const str = "Test";
const arr = [1,2,4];
console.log(arr.length);

console.log(str[2]);

// Метод Увелечение/уменьшение регистра test>TEST
console.log(str.toLowerCase());

//Поиск подстроки, показывает где находится это слово или набор букв, если такого нету то ответ будет -1

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

// Slice - Вырезает часть из текста в указанном промежутке(Может в отрицание, начинает с конца)
const world = "Hello World! and i Love you!";

console.log(world.slice(6,12));
//Substring - Вырезает часть из текста в указанном промежутке
console.log(world.substring(6,12));
//Substring - Вырезает часть из текста в указанной длине
console.log(world.substr(6,6));

//Math - Матиматика с разными методами например round(округление)
const num = 12.2;

console.log(Math.round(num));

//Math.random - случайное число от 0 до 1
const sum = Math.random();

function Mat (numb){

   return sum + numb;
}
const TEST = Mat(5);
if(TEST<5.5){
   console.log(TEST, false);
}  else
    console.log(TEST, true);



const number = 12.5;
//Округляет число до целого
console.log(Math.round(number));

const test = "12.99px";
// Вернет как целое число
console.log(parseInt(test));

// Вернет только числоб с точкой после запятой
console.log(parseFloat(test));

// Метод .trim убирает все пробелы в начале и в конце строки, поэтому и не дает заполнить строку пробелами
console.log(str.trim("  fdsfs  "));