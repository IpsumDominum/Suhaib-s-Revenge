MISSION1= [];
////////
enemies1= [];
//e1 = Enemy(0,0);
//e2 = Enemy(0.5,0);
e3 = Enemy(0.7,0);
//enemies1.push(e1);
//enemies1.push(e2);
enemies1.push(e3);
wave1 = Wave({
    enemies:enemies1
});

///////
enemies2= [];
e12 = Dildo(0.2,0);
e22 = Dildo(0.5,0);
e32 = Dildo(0.7,0);
//e42 = Enemy(0.2,-0.2);
//e52 = Enemy(0.7,-0.2);
enemies2.push(e12);
enemies2.push(e22);
enemies2.push(e32);
//enemies2.push(e42);
//enemies2.push(e52);

wave2 = Wave({
    enemies:enemies2
});
///////
MISSION1.push(wave1);
MISSION1.push(wave2);
