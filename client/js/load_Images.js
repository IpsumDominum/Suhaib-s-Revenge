Img = {};
Img.player = new Image();
Img.player.src = '/client/img/suhaib.png';
Img.player.onload = function() {};
Img.bullet = {}
Img.bullet['magic']= new Image();
Img.bullet['magic'].src = '/client/img/bullet.png';
Img.bullet['magic'].onload = function() {};
Img.bullet['sperm']= new Image();
Img.bullet['sperm'].src = '/client/img/sperm.png';
Img.bullet['sperm'].onload = function() {};

Img.enemy = {};
addEnemyImage = function(name,source){
    Img.enemy[name]= new Image();
    Img.enemy[name].src = source;
    Img.enemy[name].onload = function(){};
};

addEnemyImage('bat','/client/img/bat.png');
addEnemyImage('dildo','/client/img/dildo.png');
addEnemyImage('hashtable', '/client/img/hashtable.png');
addEnemyImage('player', '/client/img/player.png');

