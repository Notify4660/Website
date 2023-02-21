"use strict";

const BIO = {
    Name:{},
    Surname:{},
    Phone:{},
    Age:{},
};

const a = prompt("Ваше имя?");
const b = prompt("Ваша фамилия");
const c = prompt("Номер вашего телефона?");
const d = prompt("Сколько вам лет?");

BIO.Name = a;
BIO.Surname = b;
BIO.Phone = c;
BIO.Age = d;

console.log(BIO);