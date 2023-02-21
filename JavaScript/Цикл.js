"use strict"

/*let num = 50;
 1 Цикл
while (num<=55){
    console.log(num);
    num++;
}
 */

/* 2 Цикл

do{
    console.log(num);
    num++;
}
while(num<55);

 3 Цикл, самый использующееся
for (let i = 1; i < 25; i++) {
    if (i==20){
       // break; ОСТАНОВИТЬ НА

       // continue; ПРОПУСТИТЬ
    }

    console.log(i);
}

 for(let j=i; j="*"; j++) {
        console.log(d);


let result = "";
const length = 7;
for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }
        result += "\n"

}
console.log(result);

*/
first:for(let i=0; i<3; i++){
    console.log(`First level: ${i}`);
    second: for(let j=0; j<3; j++){
        console.log(`Second level: ${j}`);
        for(let k=0; k<3; k++){
            if (k === 2) continue second;
            console.log(`Third level: ${k}`);
        }
    }
}