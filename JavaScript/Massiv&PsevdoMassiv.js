"ust strict";
/*
const arr = [0,1,2,3,6,8];

//Метод pop - удаляет элемент в конце массива
//arr.pop();


//Метод push - добавляет элемент в конце массива
arr.push (10);
console.log(arr);

for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}
*/

/*
const arr = [0,1,2,3,6,8];
arr[99] = "Привет";
console.log(arr.length);
console.log(arr);
 */

//Метод массива forEach(), дает возможность перебора массива !!!Часто юзабельная
/*
const arr = [0,1,2,3,6,8];
arr.forEach(function (number, i, arr){
    console.log(`${i}: ${number} внутри массива ${arr}`);
});

for(let value of arr){
    console.log(value);
}
 */
//Метод сплит split - делит строчку через запятую
//Метод join- меняет знак между разделенными частями
//Метод sort сортирует в алфавитном порядке или же от 0 до 10 ОТ МЕНЬШЕГО К БОЛЬШЕМУ, сортирует все как строки!!! Имеет алгоритм быстрой сортировки
/*
const str = prompt("Да?","");
const product = str.split(",");
product.sort();
console.log(product.join('; '));
*/
const arr = [3,1,10,4,0,2];
arr.sort(compareNumb);
console.log(arr);

function compareNumb(a,b){
    return a - b;
}