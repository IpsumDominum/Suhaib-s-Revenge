Brendan = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "brendan";
    self.width = 0.5;
    self.height = 0.5;
    self.spdX = 0;
    self.spdY = 0.005;
    self.traj = 0;
    self.bulletskin = "magic";
    self.bulletdamage = 2;
    self.bulletspeed = 8;
    self.delay = 0;
    self.type = "boss";
    var superupdate = self.update;
    self.update = function(){
        if(self.y <0.4)
            self.y += self.spdY;
        //self.x += Math.cos(self.y*10)/50;
        if(self.delay%4==0){
            self.shootBullet("linear");
        }
        self.traj +=self.spdY;
        self.delay ++;
        //        superupdate();   
    }
    return self;
};
FrenchGuy = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 40;
    self.hpMax = 40;
    self.skin = "frenchguy";
    self.width = 0.4;
    self.height = 0.4;
    self.spdX = 0;
    self.spdY = 0.005;
    self.traj = 0;
    self.bulletskin = "wine";
    self.bulletdamage = 2;
    self.bulletspeed = 8;
    self.delay = 0;
    self.attackSpeed = 10;
    self.type = "boss";
    var superupdate = self.update;
    self.update = function(){
        if(self.y <0.4)
            self.y += self.spdY;
        //self.x += Math.cos(self.y*10)/50;
        if(self.delay%self.attackSpeed==0){
            self.shootBullet("linear");
        }
        self.traj +=self.spdY;
        self.delay ++;
        //        superupdate();   
    }
    return self;
};
