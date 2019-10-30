HashTable = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "hashtable";
    self.width = 0.1;
    self.height = 0.1;
    self.spdX = 0;
    self.spdY = 0.005;
    self.traj = 0;
    self.bulletskin = "magic";
    self.bulletdamage = 1;
    self.bulletspeed = 0.02;
    self.attackspd = 10;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        superupdate();   
        self.y += self.spdY;
        self.x = (self.x+(Math.cos(self.y*10)/50))%1;
        if(self.delay%self.attackspd==0){
            self.shootBullet("linear");
        }
        self.traj +=self.spdY;
        self.delay ++;
    }
    return self;
}
//var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
//audio.play();
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
    self.bulletspeed = 0.02;
    self.attackspeed = 10;
    self.attackspd = 10;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        superupdate();   
        self.y += self.spdY;
        self.x = (self.x+(Math.cos(self.y*10)/50))%1;
        if(self.delay%self.attackspd==0){
            self.shootBullet("linear");
        }
        self.delay ++;
        if(self.y>1)    
        self.tobeRemoved =true;
    }
    return self;
}
RedBlack = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "redblack";
    self.width = 0.1;
    self.height = 0.1;
    self.spdX = 0;
    self.spdY = 0.005;
    self.traj = 0;
    self.bulletskin = "blackball";
    self.bulletdamage = 1;
    self.bulletspeed = 0.02;
    self.attackspd = 20;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        superupdate();   
        self.y += self.spdY;
        self.x = (self.x+(Math.cos(self.y*10)/50))%1;
        if(self.delay%self.attackspd==0){
            self.shootBullet("fan");
        }
        self.traj +=self.spdY;
        self.delay ++;
        
    }
    return self;
}
Graph = function(x,y){
    var self = Enemy(x,y);        
    self.hp = 10;
    self.hpMax = 10;
    self.skin = "graph";
    self.width = 0.1;
    self.height = 0.1;
    self.spdX = 0;
    self.spdY = 0.01;
    self.traj = 0;
    self.bulletskin = "magic";
    self.bulletdamage = 1;
    self.bulletspeed = 0.04;
    self.attackspd = 10;
    self.delay = 0;
    var superupdate = self.update;
    self.update = function(){
        superupdate();   
        self.y += self.spdY;
        self.x = (self.x+(Math.cos(self.y*10)/50))%1;
        if(self.delay%self.attackspd==0){
            self.shootBullet("linear");
        }
        self.traj +=self.spdY;
        self.delay ++;

    }
    return self;
}
///
ENEMIES.HashTable = HashTable(0,0);
ENEMIES.Dildo = Dildo(0,0);
ENEMIES.RedBlack = RedBlack(0,0);
ENEMIES.Graph = Graph(0,0);
///
