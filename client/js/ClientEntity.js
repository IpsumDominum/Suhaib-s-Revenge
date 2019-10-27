//confirmPack = {};
//confirmPack['bullets'] = {};
Entity = function(){
    var self= {
    };
    self.update = function(){
        self.updatePosition();
    }
    self.updatePosition = function(){
        var newx = self.x +self.spdX;
        var newy = self.y +self.spdY;
        if(newx<=0.9 && newx >=-0.1)
           self.x =newx;
        else
           self.x = self.x;
        if(newy<=0.9 && newy>=0.1)
           self.y =newy;
        else
           self.y = self.y;
    }
    self.getDistance = function(pt){
        return Math.sqrt(Math.pow(self.x-pt.x,2)+Math.pow(self.y-pt.y,2));
    }
    return self;
  }
function drawArrowhead(context, from, to, radius) {
	var x_center = to.x;
	var y_center = to.y;

	var angle;
	var x;
	var y;
	context.beginPath();

	angle = Math.atan2(to.y - from.y, to.x - from.x)
	x = radius * Math.cos(angle) + x_center;
	y = radius * Math.sin(angle) + y_center;

	context.moveTo(x, y);

	angle += (1.0/3.0) * (2 * Math.PI)
	x = radius * Math.cos(angle) + x_center;
	y = radius * Math.sin(angle) + y_center;

	context.lineTo(x, y);

	angle += (1.0/3.0) * (2 * Math.PI)
	x = radius *Math.cos(angle) + x_center;
	y = radius *Math.sin(angle) + y_center;

	context.lineTo(x, y);

	context.closePath();

	context.fill();
}
Player = function(initPack){
    var self = Entity();
    if(initPack){
    self.x = initPack.x;
    self.y = initPack.y;
    self.width = 0.2;
    self.height = 0.1;
    self.hp = initPack.hp;
    self.hpMax = initPack.hpMax;
    self.score = initPack.score;
    self.username = initPack.username;
    self.spdX = 0;
    self.spdY = 0;
    self.speed = 8;
    self.speedx = (self.speed)/ctx.canvas.width;     
    self.speedy = (self.speed/4)/ctx.canvas.height;
    self.bulletspeed = 8;
    self.bulletdamage = 1;
    self.bulletskin = "magic";
    }
    self.pressingRight = false;
    self.pressingLeft = false;
    self.pressingDown = false;
    self.pressingUp = false;
    self.pressAttack = false;
    var superupdate = self.update;
    self.update = function(){
       self.update_spd();
       superupdate();
       if(self.pressingAttack)
          self.shootBullet(90);
    }
    self.update_spd = function(){
        self.spdX = 0;
        self.spdY = 0;
       if(self.pressingDown)
       self.spdY = self.speedy;
       if(self.pressingUp)
       self.spdY = -self.speedy;
       if(self.pressingLeft)
       self.spdX = -self.speedx;
       if(self.pressingRight)
       self.spdX = self.speedx;
    }
    self.shootBullet = function(angle){
        Bullet({
			parent:"player",
            angle:angle,
			x:self.x,
            y:self.y,
            bulletskin:self.bulletskin,
            bulletdamage:self.bulletdamage,            
            bulletspeed:self.bulletspeed,
		});
    }
    self.draw = function(){
        var hpWidth = 30 * self.hp/self.hpMax;
        
        //var spdX = Math.cos(self.mouseAngle/180*Math.PI);
        //var spdY = Math.sin(self.mouseAngle/180*Math.PI);
                //player rectangle is     aw    
        var damage = ((self.hpMax-self.hp)/self.hpMax) *0.8;
        ctx.drawImage(Img.player,w*theplayer.x-theplayer.width/2,h*theplayer.y-theplayer.height/2,w*theplayer.width,h*theplayer.height);
        ctx.fillStyle = 'green';        
        ctx.fillRect(ctx.canvas.width*0.1,ctx.canvas.height*0.97,ctx.canvas.width*0.8,ctx.canvas.height*0.03);
        ctx.fillStyle = 'red';        
        ctx.fillRect(ctx.canvas.width*0.1,ctx.canvas.height*0.97,ctx.canvas.width*damage,ctx.canvas.height*0.03);
        //ctx.fillText("4/10",ctx.canvas.width*0.3,ctx.canvas.height*0.9);
        //drawArrowhead(ctx,{x:ctx.canvas.width*0.1,y:ctx.canvas.height*0.1},{x:ctx.canvas.width*0.2,y:ctx.canvas.height*0.2},2);
        //drawArrowhead(ctx,{x:ctx.canvas.width*self.x,y:ctx.canvas.height*self.y},{x:ctx.canvas.width*(self.x +spdX),y:ctx.canvas.width*(self.y + spdY)},2);
        
        
        //var name = self.username.toString().slice(0,7);
        
//          ctx.fillText("hi",self.x,self.y);
//          ctx.fillText(self.score,self.x,self.y-60);
    }
    return self;
}
var bulletidx = 0;
Bullet = function(initPack){
    var self = Entity();
    self.id = bulletidx ++;
    self.x = initPack.x;
    self.y = initPack.y;
    self.parent = initPack.parent;
    self.bulletdamage = initPack.bulletdamage;
    self.bulletskin = initPack.bulletskin;
    self.bulletspeed = initPack.bulletspeed;
    self.spdX = (Math.cos(initPack.angle/180*Math.PI) * self.bulletspeed)/ctx.canvas.width;
    self.spdY = (Math.sin(initPack.angle/180*Math.PI) * self.bulletspeed/4)/ctx.canvas.height;
    superupdate = self.update;
    self.tobeRemoved = false;
    self.update = function(){
        self.x -= self.spdX;
        self.y -=self.spdY;
        if(self.x<0 ||self.x >1)    
        self.tobeRemoved ==true;
        if(self.y<0 ||self.y >1)    
        self.tobeRemoved ==true;
        if(self.parent=="player"){
        for(var enemy in Enemy.list){
            var e = Enemy.list[enemy];
            if(self.getDistance(e)<0.05){
                e.hp -= self.bulletdamage;
                if(e.hp<=0){                    
                    console.log('enemydied');
                    theplayer.score +=10;
                    e.tobeRemoved = true;
                }
                self.tobeRemoved = true;
            }
        }
        }else if(self.parent=="enemy"){
            if(self.getDistance(theplayer)<0.05){
                theplayer.hp -=self.bulletdamage;                
                self.tobeRemoved = true;
                if(theplayer.hp<=0){
                    alert('hi you died');
                }
            }
        }   
        
    }
    self.draw = function(){
        var width = 0.04;
        var height = 0.04;
        var ctxw = ctx.canvas.width;
        var ctxh = ctx.canvas.height;
        var suhaibmode = false;
            //console.log(self.x,self.y)ds
        if(suhaibmode){
            var cha = (Math.floor(Math.random()*255)+1536).toString(16).toUpperCase();
            ctx.fillText(eval("'\\u0"+ cha+"'"),x-width/2,y-height/2);
        }
        else{
            var bulletx = ctxw*(self.x)-width/2;
            var bullety = ctxh*(self.y)-height/2;
            var bulletw = ctxw*width;
            var bulleth = ctxh*height;
            ctx.drawImage(Img.bullet[self.bulletskin],bulletx,bullety,bulletw,bulleth);
        }
//         ctx.fillRect(self.x-5,self.y-5,10,10);
    }
    Bullet.list[self.id] = self;
    return self;
}
Bullet.list = {};

Wave = function(initPack){
    var self = {};
    self.enemies = initPack.enemies;
    self.start_wave = function(){
        for(i=0;i<self.enemies.length;i++){
            Enemy.list[self.enemies[i].id] = self.enemies[i];
        }
    }
    return self;
}









