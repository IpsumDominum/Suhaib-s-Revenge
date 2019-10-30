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
    self.bulletwidth = initPack.bulletwidth;
    self.bulletheight = initPack.bulletheight;
    self.bulletheight = 0.04;
    self.spdX = (Math.cos(initPack.angle/180*Math.PI) * self.bulletspeed);
    self.spdY = (Math.sin(initPack.angle/180*Math.PI) * self.bulletspeed);
    superupdate = self.update;
    self.tobeRemoved = false;
    self.update = function(){
        self.x -= self.spdX;
        self.y -=self.spdY;
        if(self.x<0 ||self.x >1)    
            self.tobeRemoved =true;
        if(self.y<0 ||self.y >1)    
            self.tobeRemoved =true;
        if(self.parent=="player"){
            for(var enemy in Enemy.list){
                var e = Enemy.list[enemy];
                if(self.getCollision(e)){
                    e.hp -= self.bulletdamage;
                    if(e.hp<=0){                    
                        theplayer.score +=10;
                        e.tobeRemoved = true;
                    }
                    self.tobeRemoved = true;
                }
            }
        }else if(self.parent=="enemy"){
            if(self.getCollision(theplayer)){
                theplayer.hp -=self.bulletdamage;
                self.tobeRemoved = true;
                if(theplayer.hp<=0){
                    alert("you died");
                }
            }
        }   
        
    }
    self.draw = function(){
        var width = self.bulletwidth;
        var height = self.bulletheight;
        var ctxw = ctx.canvas.width;
        var ctxh = ctx.canvas.height;
        var suhaibmode = true;
        if(suhaibmode &&self.parent=="player"){
            var cha = (Math.floor(Math.random()*255)+1536).toString(16).toUpperCase();
            ctx.font = "10px Arial";
            var bulletx = ctxw*(self.x-width/2);
            var bullety = ctxh*(self.y-height/2);
            ctx.fillText(eval("'\\u0"+ cha+"'"),bulletx,bullety);
        }
        else{
            var bulletx = ctxw*(self.x-width/2);
            var bullety = ctxh*(self.y-height/2);
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
