var socket = io();
var choice = "";
var map_create_button = document.getElementById('map-create');
var map_name = document.getElementById('map-name');
var menu = document.getElementById("menu");
var info = document.getElementById("info");
var green = document.getElementById('green');
var blood = document.getElementById('blood');
var white =document.getElementById('white');
var waves = document.getElementById('waves');
var target = document.getElementById('target');
var wavesbox = document.getElementById('wavesbox');
var savebutton = document.getElementById('savebutton');
var wavecontentbox = document.getElementById('wavecontentbox');
var wavecontent = document.getElementById('wavecontent');
var wavecontenttag = document.getElementById('wavecontenttag');
var enemy_box = document.getElementById('enemy-box-container');
var obj_box = document.getElementById('object-box-container');
var ctxbase = document.getElementById('ctx');
var ctx = ctxbase.getContext("2d");
green.onclick = function(){
    green.style.opacity = 1;
    blood.style.opacity = 0.3;
    white.style.opacity = 0.3;
    green.style.border = "10px solid orange";
    white.style.border = "0px solid orange";
    blood.style.border = "0px solid orange";
    choice = "green";
}
blood.onclick = function(){
    green.style.opacity = 0.3;
    blood.style.opacity = 1;
    white.style.opacity = 0.3;
    green.style.border = "0px solid orange";
    white.style.border = "0px solid orange";
    blood.style.border = "10px solid orange";
    choice = "blood";
}
white.onclick = function(){
    green.style.opacity = 0.3;
    blood.style.opacity = 0.3;
    white.style.opacity = 1;
    green.style.border = "0px solid orange";
    white.style.border = "10px solid orange";
    blood.style.border = "0px solid orange";
    choice = "white";
}

var random_name = ["Brendan MacCane","Michael Albert","Iain Hewson","Suhaib","Barnabas","Harlene Hane","The Joker","OUSA","Owheo","Big O"];
var random_adjective= ["Nuclear","Massive","tiny","Fat","Gorgeous","Super Long","Complicated","Secret","Hidden","Green","Blue","Black","AI","Arabic"];
var random_location = ["Toilet","Play room","Dungeon","Restaurant","Playground","Thing","Something","Hilbert Space","Vector Space","Factory","Slaughter room"];
var map_imgs = {
    "green":"map.png",
    "blood":"map2.png",
    "white":"map3.png",
}
var toMenu = function(){
    alert('hi');
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
WAVES = {};
wave_num = 1;
wave_choice = "Wave1";
var awave_id = "Wave1";
WAVES[awave_id] = {};
WAVES[awave_id].count = 0;
WAVES[awave_id].elements = [];
Wave_render_ENEMIES_list = [];
function warning(message){
    window.requestAnimationFrame(step);
    info.style.color = "orange";
    info.style.opacity = 1;
    info.innerHTML = message;
}
function getWaveContent(wave){
    if(!chosenMap){
        return;
    }
    Wave_render_ENEMIES_list = [];
    wavecontenttag.innerHTML = wave.id;
    wave_choice = wave.id;
    wavecontent.innerHTML = "";
    for(var wavetab in WAVES){
        if(wavetab==wave_choice){
            document.getElementById(wavetab).style.border="4px solid orange";
            for(i=0;i<WAVES[wavetab].elements.length;i++){
                var enemytab = WAVES[wavetab].elements[i];
                Wave_render_ENEMIES_list.push(enemytab);
            wavecontent.innerHTML += `
        <div class="item-box card " style="width:100%;">
        <div id="`+enemytab.id+`"  class="card-body">
        <img src="`+enemytab.src+`" width="40"height="40">
`+enemytab.name+`
    </div>
        </div>
`;}
        }else{
            document.getElementById(wavetab).style.border="0px solid black";
        }
    }
}

function addWave(){
    if(!chosenMap)
        return;
    wave_num ++;
    var wave_id = "Wave"+wave_num;
    waves.innerHTML +=`     <div class='item-box card' style='width:100%;'>
        <div id='`+wave_id+`' onclick='getWaveContent(this)' class='card-body'>
        <img src='client/img/Brendan McCane.jpg' width='40'height='40'>
        Wave `+(wave_num)+`
    </div>
        </div>
        </div>
 `;
    WAVES[wave_id] = {};
    WAVES[wave_id].count = 0;
    WAVES[wave_id].elements = [];
}
addingEnemy = false;
enemyadded = false;
mymousex = 100;
mymousey =100;
function addWaveContent(enemy,enemytype){
    if(!chosenMap)
        return;
    var thisid = wave_choice+(WAVES[wave_choice].count++);
    modal.style.display = "none";
    addingEnemy = true;
    enemyadded= false;
    if(enemytype==="boss"){
        this_enemy_skin = BOSSES[enemy.id].skin;
        this_enemy_width = BOSSES[enemy.id].width;
        this_enemy_height = BOSSES[enemy.id].height;
    }else{
        this_enemy_skin = ENEMIES[enemy.id].skin;
        this_enemy_width = ENEMIES[enemy.id].width;
        this_enemy_height = ENEMIES[enemy.id].height;
    }
    addingEnemyImg = Img.enemy[this_enemy_skin];
    handler= function(event){
        if(enemyadded){
            return;
        }
        mymousex =event.clientX;
        mymousey = event.clientY;

    }    
    ctxbase.addEventListener('mousemove', handler);
    window.requestAnimationFrame(addEnemy);        
    document.onmousedown = function(event){
        if(enemyadded){
            return;
        }
        if(event.clientX>ctx.canvas.width||event.clientX<0){
            return;
        }
        if(event.clientY>ctx.canvas.height||event.clientY<0){
            return;
        }
        var rect = ctxbase.getBoundingClientRect();
        relx = (event.clientX-rect.left)/ctx.canvas.width;
        rely = (event.clientY-rect.top)/ctx.canvas.height;
        wavecontent.innerHTML += `
        <div class="item-box card " style="width:100%;">
        <div id="`+thisid+`"  class="card-body">
        <img src="`+enemy.src+`" width="40"height="40">
`+enemy.id+`
    </div>
        </div>
`;
        enemyadded = true;
        addingEnemy = false;
        var enemytab = {
            id:thisid,
            name:enemy.id,
            skin:this_enemy_skin,
            src:enemy.src,
            width:this_enemy_width,
            height:this_enemy_height,
            relx:relx,
            rely:rely};
        Wave_render_ENEMIES_list.push(enemytab);
        WAVES[wave_choice].elements.push(enemytab);
    }

}

function ask_for_enemy(){
    if(!chosenMap)
        return;
    modal.style.display = "block";
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

var timer =0;
map_name.value = choose(random_name) +"'s " +choose(random_adjective) +" " +choose(random_location);
ctx.canvas.width = window.innerWidth*0.6;
ctx.canvas.height = window.innerHeight;
Imgbg = new Image();
map_create_button.onclick = function(){
    if(choice===""){
        window.requestAnimationFrame(step);
        info.style.color = "orange";
        info.style.opacity = 1;
        info.innerHTML = "Please choose a map first!";
    }else if(map_name.value===""){
        window.requestAnimationFrame(step);
        info.style.color = "orange";
        info.style.opacity = 1;
        info.innerHTML = "Please give the map a name!";
    }else{
        map_name_value = map_name.value;
        chosenMap = true;
        menu.style.display = 'none';
        wavesbox.style.display = 'inline-block';
        wavecontentbox.style.display = 'inline-block';
        savebutton.style.display = 'inline-block';
        target.style.left = "30%";
        Imgbg.src = "/client/img/"+map_imgs[choice];
        Imgbg.onload = function(){
            ctx.canvas.width = window.innerWidth*0.6;
            ctx.canvas.height = window.innerHeight;
            ctx.drawImage(Imgbg,0,0,ctx.canvas.width,ctx.canvas.height);
            //ctx.drawImage(img,0,ctx.canvas.height/1.3,ctx.canvas.width,ctx.canvas.height/4);
           //target.style.background-image = img;
        }
    //    socket.emit('map_create',{map_name:map_name.value,map_choice:choice}); 
    }
}
setInterval(function(){
    ctx.canvas.width = window.innerWidth*0.6;
    ctx.canvas.height = window.innerHeight;
    ctx.drawImage(Imgbg,0,0,ctx.canvas.width,ctx.canvas.height);
},20);
function step(){
    if(timer===100){
        timer = 0;
        return;
    }else{
        timer +=1;
        info.style.opacity = 1-timer/100;
        window.requestAnimationFrame(step);
    }
}
function addEnemy(){    
    if(addingEnemy){
        ctx.drawImage(addingEnemyImg,mymousex-(ctx.canvas.width*(this_enemy_width/2)),mymousey+(ctx.canvas.height*(this_enemy_height/2)),ctx.canvas.width*this_enemy_width,ctx.canvas.height*this_enemy_height);
        window.requestAnimationFrame(addEnemy);        
    }else{
        return;
    }
}
function renderEnemies(){
    for(i=0;i<Wave_render_ENEMIES_list.length;i++){
        //ced = current draw enemy
        var cde = Wave_render_ENEMIES_list[i];
        ctx.drawImage(Img.enemy[cde.skin],ctx.canvas.width*(cde.relx-cde.width/2),ctx.canvas.height*(cde.rely-cde.height/2),ctx.canvas.width*(cde.width),ctx.canvas.height*(cde.height));
    }
    window.requestAnimationFrame(renderEnemies);        
}
window.requestAnimationFrame(renderEnemies);        
var chosenMap = false;
var switchTab = function(tab){
        switch(tab){
            case 1:  enemy_box.style.display='none';
                    obj_box.style.display="inline-block";
                     break;
                
            case 2:   enemy_box.style.display='inline-block';
                        obj_box.style.display="none";
                     break;
        }
}
savebutton.onclick = function(){
    socket.emit("save",{name:map_name_value,waves:WAVES});
 }
