///MISSION IMPOSSIBLE!!!///
var m = Mission("missionimpossible");
m.wave_num =1;
m.num_enemy = 0;
m.enemy_count = 0;

m.add_next_wave = function(){
    if(m.wave_num%5==0 &&m.wave_num!=0){
        var toadd= BOSSES[choose(Object.keys(BOSSES))];
        toadd.x = 0.5;
        toadd.y = -1;
        m.add(toadd);
        m.add_wave("boss");
    }else{
        while(true){
            if(m.enemy_count<m.wave_num){
                var toadd= ENEMIES[choose(Object.keys(ENEMIES))];
                toadd.x = Math.random();
                toadd.y = Math.random()-1;
                m.add(toadd);
                m.enemy_count ++;
            }else{
                break;
            }
        }
        m.add_wave("normal");
        m.enemy_count = 0;
    }
    m.wave_num++;
}


