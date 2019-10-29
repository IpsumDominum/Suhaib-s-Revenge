var enemychoices = document.getElementById('enemychoices');
function add_enemy_choice(enemy_name,src,type){
    enemychoices.innerHTML +=`
        <div class="column-2">
        <img src="`+src+`" id="`+enemy_name+`" onclick="addWaveContent(this,'`+type+`')" width="150"height="150">
        <p>`+enemy_name+"("+type+`)</p>
        </div>
`
    
}
for(var enemy in ENEMIES){
    add_enemy_choice(enemy,Img.enemy[ENEMIES[enemy].skin].src,"enemy");
}
for(var boss in BOSSES){
    add_enemy_choice(boss,Img.enemy[BOSSES[boss].skin].src,"boss");
}
