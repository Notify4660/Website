"use strict";


//start();
const VideoGames = {
    Estimate: 0,
    Valorant: {},
    Agents: {},
    Agents_opened: {},
    generis:[],
    private: false,
    start: function (){
        VideoGames.Estimate = +prompt("Ваша оценка игры по 100-бальной шкале?","");
        while (VideoGames.Estimate == "" || VideoGames.Estimate == null || isNaN(VideoGames.Estimate)){
            VideoGames.Estimate = +prompt("Ваша оценка игры по 100-бальной шкале?","");
        }
    },
    rememberMyValorant: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Кто твой любимый агент?", "").trim(),
                b = prompt("Сколько ты сыграл матчей?", "");


            if (a != null && b != null && a != "" && b != "" && b.length < 1000) {
                VideoGames.Valorant[a] = b;
                console.log("Right");
            } else {
                console.log("Erorr!!!")
            }
        }
    },
    estimationGames:function (){
        if(VideoGames.Estimate<10&&VideoGames.Estimate>0) {
            console.log("Слишком маленькая оценка:(");
        }
        else if (VideoGames.Estimate>=10&&VideoGames.Estimate<70){
            console.log("Вы дефолтный работяга, стабильная оценка:)");
        }
        else if (VideoGames.Estimate>=70&&VideoGames.Estimate<100) {
            console.log("Спасибо, вы прелесть:)");
        }
        else if (VideoGames.Estimate ==0) {
            console.log("Вот сука");
        }
        else if (VideoGames.Estimate === null) {
            console.log(VideoGames.Estimate=0);
        }
        else{
            console.log("ЭТО СТОООООООООО!!!!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(VideoGames);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            /*
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            if(gener === "" || gener === null){
                console.log("Вы ввели некорректные данные!");
                i--;
            }
            else{
                VideoGames.generis[i - 1] = gener;
            }
        }
        */
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === "" || genres === null) {
                console.log("Вы ввели некорректные данные!");
                i--;
            } else {
                VideoGames.generis = genres.split(", ");
                VideoGames.generis.sort();
            }

            VideoGames.generis.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} это ${item}`);
            });

        };
    },
    toggleVisibleMyDB: function (){
        if (VideoGames.private === false){
            VideoGames.private = true;
            console.log(true);
        }else {
            VideoGames.private = false;
            console.log(false);
        }
    }
};
VideoGames.start();
VideoGames.rememberMyValorant();
VideoGames.estimationGames();
VideoGames.writeYourGenres();
VideoGames.toggleVisibleMyDB ();

let massage = (a=5) => console.log(a);
massage();



