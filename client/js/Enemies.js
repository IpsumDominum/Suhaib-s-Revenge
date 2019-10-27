HashTable = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "player";
    self.width = 0.2;
    self.height = 0.2;
    self.spdX = 0;
    self.spdY = 0.01;
    self.traj = 0;
    self.bulletskin = "magic";
    self.bulletdamage = 1;
    self.bulletspeed = 8;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        self.spdX = Math.sin(self.traj)/3;
        if(self.delay%4==0){
            self.shootBullet("linear");
        }
        console.log(self.traj);
        self.traj +=self.spdY;
        self.delay ++;
        superupdate();   
    }
    return self;
}
Dildo = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "dildo";
    self.width = 0.1;
    self.height = 0.1;
    self.spdX = 0;
    self.spdY = 0.005;
    self.traj = 0;
    self.bulletskin = "sperm";
    self.bulletdamage = 1;
    self.bulletspeed = 16;
    self.attackspeed = 10;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        self.y += self.spdY;
        self.x += Math.cos(self.y*10)/50;
        if(self.delay%4==0){
            self.shootBullet("linear");
        }
        console.log(self.traj);
        self.delay ++;
        if(self.y>1)    
        self.tobeRemoved =true;
        //superupdate();   
    }
    return self;
}