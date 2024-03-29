counter = -40;
wave_delay = 100;
active_waves = [];
cur_wave = {};
cur_wave.is_finished = function(){
    return true;
}
last_wave = true;
setInterval(function(){
  ctx.canvas.width = window.innerWidth * 0.6;
  ctx.canvas.height = window.innerHeight;
  w = ctx.canvas.width;
  h = ctx.canvas.height;
  
  //signDiv.width = WIDTH;
  //signDiv.height = HEIGHT;
  
  //ctx.canvas.width = ctx.parentNode.innerWidth;    
  //ctx.canvas.height = ctx.parentNode.innerHeight;    
    if(chosenMap){
        ctx.clearRect(0,0,w,h);
        theplayer.update();
        drawMap();
        theplayer.draw();
        draw_bullets();
        draw_enemies();
        if(counter<0){
            counter++;
        }else{
            if(choice =="missionimpossible"){
                var morewaves = true;
            }else{
                var morewaves= (GAME_MISSION.waves.length)>0;
            }
            if(morewaves){
                next_wave();
            }else{
                if(last_wave){
                    next_wave();
                    last_wave = false;
                }
                alert("you won!!!");
            }}
            counter ++;
        //drawScore();
        //drawItems();
    }
},40);

uninitialized = true;
var next_wave = function(){
    if(((counter%wave_delay)==0)){
        if(cur_wave.is_finished()){
        if(choice=="missionimpossible"){
            GAME_MISSION.add_next_wave();
            cur_wave = GAME_MISSION.waves.pop();
            cur_wave.start_wave();
        }else{
            cur_wave = GAME_MISSION.waves.pop();
            cur_wave.start_wave();
        }
        }
    }
}
var draw_bullets = function(){
    for(var bulletidx in Bullet.list){
        var bullet = Bullet.list[bulletidx];
        //console.log(bullet);
        bullet.update();
        if(bullet.tobeRemoved){
            delete Bullet.list[bulletidx];
        }
        else{
            bullet.draw();
        }
    }
}
var draw_enemies = function(){
    for(var enemyidx in Enemy.list){
        var enemy = Enemy.list[enemyidx];
        enemy.update();      
        if(enemy.tobeRemoved==true){
            if(enemy.type=="boss"){
                cur_wave.boss_killed();
            }
            delete Enemy.list[enemyidx];
        }
        else{
            enemy.draw();
        }
    }
}
var drawMap = function(){
  if(uninitialized===true){
       count1 = -h;
       count2 = 0;
     uninitialized = false;
  }

  var scrollspeed = ctx.canvas.height*0.005;
  count1 = count1+scrollspeed;
  count2 = count2+scrollspeed;
  if(count1>=h){
    count1 = -h;
  }
  if(count2>=h){
      count2 = -h;
    }
  ctx.drawImage(Img.bg,0,count1,w,h);
  ctx.drawImage(Img.bg,0,count2,w,h);

}
var drawScore = function(){
  var playerscore = 0;
  ctx.fillStyle = 'white';
    ctx.fillText(playerscore,0,30);
}
var drawItems = function(){

}/*
let img = new Image();
img.src = '/client/img/capguy.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = img.width/3;
const height = img.height/4;
var scaledWidth = width *scale;
var scaledHeight = height *scale;
const framerate = 20;
const cycleLoop = [0,1,0,2];
let idx = 0;
let count = 0;

function step(timestamp){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[idx], 0, 0, 0);
  idx = (idx +1) % cycleLoop.length;
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}
function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}
*/
