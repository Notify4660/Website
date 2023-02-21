"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "white"
    }
};

console.log(options.name);
// delete - удаляет свойство
// delete options.name;

//Счетчик всех свойств в options
let counter = 0;
//Цикл по перебору свойств
for(let key in options) {
    if(typeof(options[key])==='object'){
        for (let i in options[key]){
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }
    else{
        console.log (`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }

}

console.log(options["colors"]["border"]);
console.log(counter);

//Метод Object.keys - для получения массива с ключами !!!ЗНАТЬ!!!
//console.log(Object.keys(options).length);

//В объект можно вписать функцию, таким оброзам мы создаем методы объекта

const MyParameters = {
    Name: "Gleb",
    Surname: "Figarev",
    Age: 18,
    Height: "173cm",
    Weight: "57kg",
    makeTest: function (){
        console.log("test");
    },
    MyHobbies: {
        VideoGames: "30+Games",
        Sport: {
            bicycle: "Stels 750",
            horizontalBars: "5 раз"
        }
    }
};

for (let key in MyParameters){
    if (typeof(MyParameters[key]) === "object"){
        for (let i in MyParameters[key]) {
            console.log(`Свойство ${i} имеет значние ${MyParameters[key][i]}`);
        }
    }

        else{
            console.log(`Свойство ${key} имеет значние ${MyParameters[key]}`);
        }

}
MyParameters.makeTest();
// Как вытащить из объектва свойства и как их посмотреть
const {bicycle,horizontalBars} = MyParameters.MyHobbies.Sport;
console.log({bicycle,horizontalBars});


console.dir(String)