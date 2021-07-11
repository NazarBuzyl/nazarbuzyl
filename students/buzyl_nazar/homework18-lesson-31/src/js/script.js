import './functionForTag';

// 1. Создать страницу, которая выводит нумерованный список песен:
let playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
}, {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
}, {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
}, {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
}, {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
}, {
    author: "AC/DC",
    song: "BACK IN BLACK"
}, {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
}, {
    author: "METALLICA",
    song: "ENTER SANDMAN"
}];

const div = document.getElementById('playList');

function getListText(arr){
    text = '';
    arr.forEach(function (item) {
        text += `The ${item.song} was written by ${item.author}.`;
    });
    return text;
}

console.log(getListText(playList));
