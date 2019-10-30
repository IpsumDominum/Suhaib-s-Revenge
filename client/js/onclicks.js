green.onclick = function(){
    green.style.opacity = 1;
    blood.style.opacity = 0.3;
    white.style.opacity = 0.3;
    green.style.border = "10px solid orange";
    white.style.border = "0px solid orange";
    blood.style.border = "0px solid orange";
    endless.style.border = "0px solid orange";
    choice = "mission1";
}
blood.onclick = function(){
    green.style.opacity = 0.3;
    blood.style.opacity = 1;
    white.style.opacity = 0.3;
    green.style.border = "0px solid orange";
    white.style.border = "0px solid orange";
    blood.style.border = "10px solid orange";
    endless.style.border = "0px solid orange";
    choice = "mission2";
}
white.onclick = function(){
    green.style.opacity = 0.3;
    blood.style.opacity = 0.3;
    white.style.opacity = 1;
    green.style.border = "0px solid orange";
    white.style.border = "10px solid orange";
    blood.style.border = "0px solid orange";
    endless.style.border = "0px solid orange";
    choice = "mission3";
}
endless.onclick = function(){
    green.style.opacity = 0.3;
    blood.style.opacity = 0.3;
    white.style.opacity = 1;
    green.style.border = "0px solid orange";
    white.style.border = "0px solid orange";
    blood.style.border = "0px solid orange";
    endless.style.border = "10px solid orange";
    choice = "missionimpossible";
}
f1.onclick = function(){
    f1.style.opacity = 1;
    f2.style.opacity = 0.3;
    f3.style.opacity = 0.3;
    f1.style.border = "10px solid orange";
    f3.style.border = "0px solid orange";
    f2.style.border = "0px solid orange";
    fighter_choice = "f1";
}
f2.onclick = function(){
    f1.style.opacity = 0.3;
    f2.style.opacity = 1;
    f3.style.opacity = 0.3;
    f1.style.border = "0px solid orange";
    f3.style.border = "0px solid orange";
    f2.style.border = "10px solid orange";
    fighter_choice = "f2";
}
f3.onclick = function(){
    f1.style.opacity = 0.3;
    f2.style.opacity = 0.3;
    f3.style.opacity = 1;
    f1.style.border = "0px solid orange";
    f3.style.border = "10px solid orange";
    f2.style.border = "0px solid orange";
    fighter_choice = "f3";
}
choose_fighter_button.onclick = function(){
    if(fighter_choice===""){
        window.requestAnimationFrame(step);
        info.style.color = "orange";
        info.style.opacity = 1;
        info.innerHTML = "Please choose a fighter first!";
    }else{
        menu1.style.display = 'none';
        menu2.style.display = 'inline-block';
        var missionmap = new Image();
        missionmap.src = "/client/img/missionmap.png";
        missionmap.onload = function(){
            ctx.drawImage(missionmap,0,0,ctx.canvas.width,ctx.canvas.height);
        };
        socket.emit('map_create',{map_choice:choice}); 
    }
}
start_game_button.onclick = function(){
    if(choice===""){
        window.requestAnimationFrame(step);
        info.style.color = "orange";
        info.style.opacity = 1;
        info.innerHTML = "Please choose a map first!";
    }else{
        chosenMap = true;
        theplayer = Player({
            x:0.5,
            y:0.9,
            score:0,
            hp:10,
            hpMax:10,
            username:"test",
        });
        GAME_MISSION = Mission.list[choice];
        menu2.style.display = 'none';
        socket.emit('map_create',{map_choice:choice}); 
    }
}
