Img = {};
Img.player = new Image();
Img.player.src = '/client/img/suhaib.png';
Img.player.onload = function() {};

Img.enemy = {};
addEnemyImage = function(name,source){
    Img.enemy[name]= new Image();
    Img.enemy[name].src = source;
    Img.enemy[name].onload = function(){};
}

addEnemyImage('bat','/client/img/bat.png');
addEnemyImage('frenchguy','/client/img/frenchguy.png');
addEnemyImage('brendan','/client/img/Brendan McCane.jpg');
addEnemyImage('dildo','/client/img/dildo.png');
addEnemyImage('hashtable', '/client/img/hashtable.png');
addEnemyImage('player', '/client/img/player.png');

Img.bullet = {}
addBulletImage = function(name,source){
    Img.bullet[name]= new Image();
    Img.bullet[name].src = source;
    Img.bullet[name].onload = function(){};
}
addBulletImage('magic','/client/img/bullet.png');
addBulletImage('sperm','/client/img/sperm.png');
addBulletImage('wine','/client/img/wine.png');

