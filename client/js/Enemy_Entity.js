var enemyidx = 0;
Enemy = function(x,y){
    var self = {};
    self.id = enemyidx ++;
    self.x = x;
    self.y = y;
    self.spdX = 0;
    self.spdY = 0.005;    
    self.width = 0.1;
    self.height = 0.1;
    self.hp = 10;
    self.hpMax = 10;
    self.tobeRemoved = false;
    self.skin = "bat";
    self.bulletskin = "magic";
    self.bulletdamage = 1;
    self.bulletspeed = -4;
    self.update = function(){
        var newx = (self.x +self.spdX)%1;        
        var newy = self.y +self.spdY;
        if(newy>1)    
        self.tobeRemoved =true;
        self.x = newx;
        self.y = newy;
    }
    self.shootBullet = function(type){
        if(type=="linear"){
            Bullet({
                parent:"enemy",
                angle:270,
                x:self.x,
                y:self.y,
                bulletskin:self.bulletskin,
                bulletdamage:self.bulletdamage,            
                bulletspeed:self.bulletspeed,
            });  
        }
    }
    self.draw = function(){
        var ex = self.x-self.width/2;
        var ey = self.y-self.height/2;
        var ew =self.width;
        var eh = self.height;
        var health = (self.hp/self.hpMax) * self.width*2;
        var x1 = self.x-self.width;
        var y1 = self.y-0.05;
        var w1 = health;
        var h1 = 0.01;
        ctx.drawImage(Img.enemy[self.skin],ex*w,ey*h,ew*w,eh*h);
        ctx.fillStyle = 'red';        
        ctx.fillRect(w*x1,h*y1,w*w1,h*h1);
    }
    return self;
}

Enemy.list = {};

