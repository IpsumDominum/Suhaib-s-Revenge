var toMenu = function(){
    showscreen(2);
}
var WIDTH = 800;
var HEIGHT = 800;
var socket = io();
var choice = "";
var fighter_choice = "";
var menu1 = document.getElementById("menu3");
var menu2 = document.getElementById("menu2");
var info = document.getElementById("info");
var green = document.getElementById('green');
var blood = document.getElementById('blood');
var endless = document.getElementById('endless');
var white =document.getElementById('white');
var start_game_button= document.getElementById('start-game');
var choose_fighter_button = document.getElementById('choose-fighter');
var gameDiv = document.getElementById('target');
var ctxbase = document.getElementById('ctx');
var ctx = ctxbase.getContext("2d");

//var random_name = ["Brendan MacCane","Michael Albert","Iain Hewson","Suhaib","Barnabas","Harlene Hane","The Joker","OUSA","Owheo","Big O"];
//var random_adjective= ["Nuclear","Massive","tiny","Fat","Gorgeous","Super Long","Complicated","Secret","Hidden","Green","Blue","Black","AI","Arabic"];
//var random_location = ["Toilet","Play room","Dungeon","Restaurant","Playground","Thing","Something","Hilbert Space","Vector Space","Factory","Slaughter room"];
var map_imgs = {
    "green":"map.png",
    "blood":"map2.png",
    "white":"map3.png",
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
var timer =0;

function step(){
    if(timer===100){
        timer = 0;
        return;
    }else{
        timer +=1;
        info.style.opacity = 1-timer/100;
        window.requestAnimationFrame(step);
    }
  }
var chosenMap = false;

var offset = 0;
 
