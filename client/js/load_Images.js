Img = {};
Img.player = new Image();
Img.player.src = '/client/img/suhaib.png';
Img.player.onload = function() {};
Img.bg = new Image();
Img.bg.src = '/client/img/map.png';
Img.bg.onload = function() {};
Img.enemy = {};
addEnemySkin= function(name,source){
    Img.enemy[name]= new Image();
    Img.enemy[name].src = source;
    Img.enemy[name].onload = function(){};
}

addEnemySkin('bat','/client/img/bat.png');
addEnemySkin('frenchguy','/client/img/frenchguy.png');
addEnemySkin('brendan','/client/img/Brendan McCane.jpg');
addEnemySkin('dildo','/client/img/dildo.png');
addEnemySkin('redblack','/client/img/redblack.png');
addEnemySkin('graph','/client/img/graph.png');
addEnemySkin('hashtable', '/client/img/hashtable.png');
addEnemySkin('player', '/client/img/player.png');

Img.bullet = {}
addBulletImage = function(name,source){
    Img.bullet[name]= new Image();
    Img.bullet[name].src = source;
    Img.bullet[name].onload = function(){};
}
addBulletImage('magic','/client/img/bullet.png');
addBulletImage('sperm','/client/img/sperm.png');
addBulletImage('wine','/client/img/wine.png');
addBulletImage('blackball','/client/img/blackball.png');
addBulletImage('kiaora','/client/img/kiaora.png');

