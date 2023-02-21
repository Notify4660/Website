"use strict";
//Имя функции это глагол с препиской над чем выполняется действие!!!
//Функции нужно вызывать после их написания, чтобы они работали
// ()-Аргумент функции
//Переменные let и const работают только в функции(Локальная переменная)
// Локальная переменная может брать глобальную без приставок let и const
// Нельзя переносить код после return. return заканчивает код.
let num = 20;

function ShowFirstMassage(text) {
    console.log(text);
    let num = 10;

}


ShowFirstMassage("Hello!");

function calc(a,b,c,d){
    return (a+b+c*d);

    // Мертвый код, после return код дальше не работает
    console.log("Right!")
}

console.log(calc(4, 5, 5, 6));
console.log(calc(6, 6, 6, 6));

function ret(){
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);
//Function expression в конце нужна точка с запятой
//Переменные можно использовать только после функции

const Logger = function(){
    console.log("Express");
};

Logger();

//Стрелочная функция
//Функция не имеет контекста вызова(this)

const calic = (a,b) => {
    console.log('1');
    return a + b;
};
console.log(calic(5,6));


// Конверт курсов валют *Пример
//Don’t repeat yourself (DRY; с англ. — «не повторяйся») — это принцип разработки программного обеспечения, нацеленный на снижение повторения информации различного рода, особенно в системах со множеством слоёв абстрагирования.
/*
const USDcurr = 58.18
const EURcurr = 57.04
const SigncurrRus = "₽"
const SigncurrEur = "€"
const SigncurrUSA = "$"

function convert (amount, curr, Signcurr){
    console.log(curr * amount + Signcurr);
}

convert(370, USDcurr, SigncurrEur);
convert(370, EURcurr, SigncurrUSA);

*/
console.log("----------------------------------")

const USDcurr = 28;
const discount = 0.9;

function convert (amount, curr){
    return curr * amount ;
}
function promotion (result){
    console.log(result * discount);
}
//Передача данных из функции в переменную Res а рес в другую функцию
const res = convert(500,USDcurr);
promotion(res);

/* Или функция в функции
promotion(convert(500,USDcurr));
*/

function test(){
    for(let i=1; i<5; i++){
        console.log(i);
        if( i===3)
            return
    }
    console.log("Done");
}
test();
//Браузер выводит в консоль undefined потому что функция пустая
function doNothing(){};
console.log(doNothing() === undefined);

//setTimeout - задержка 500мс=0.5c
function first (){
    setTimeout(function() {
        console.log(1);
    },500);
}

function second (){
        console.log(2);
}

first();
second();
//callback -это функция, которая должна быть выполнена после того, как другая функция завершит работу.
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`)
    callback();
}
learnJS("JavaScript", function(){
    console.log("Я прошел этот урок!");
});


//Анонимная функция
(function(){
    let massage = "Hello!";

    alert(massage);
})();
//Function Declaration – функция, объявленная в основном потоке кода.
function sum (a,b){
    return a + b
}
console.log(sum(4,5));

//Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.
let summ = function (a,b,c){
    return a+b+c;
}
console.log(summ(2,3,5));

