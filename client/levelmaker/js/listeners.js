
document.onkeydown = function(event){
    if(event.keyCode===68)
    theplayer.pressingRight = true;
    else if(event.keyCode===83)
    theplayer.pressingDown = true;
    else if(event.keyCode===65)
    theplayer.pressingLeft = true;
    else if(event.keyCode===87)
    theplayer.pressingUp = true;
    else if(event.keyCode===75)
        theplayer.pressingAttack = true;
    else if(event.keyCode===32)
        theplayer.pressingSpecial = true;

}
document.onkeyup = function(event){
    if(event.keyCode===68)
    theplayer.pressingRight = false;
    else if(event.keyCode===83)
    theplayer.pressingDown = false;
    else if(event.keyCode===65)
    theplayer.pressingLeft = false;
    else if(event.keyCode===87)
    theplayer.pressingUp = false;
    else if(event.keyCode===75)
        theplayer.pressingAttack = false;
    else if(event.keyCode===32)
        theplayer.pressingSpecial = false;
}
document.onmousedown = function(event){
    //theplayer.pressingAttack = true;
}
document.onmouseup = function(event){
    //theplayer.pressingAttack = false;
}
document.onmousemove = function(event){
      var rect = ctxbase.getBoundingClientRect();
    var x = -WIDTH/2 + event.clientX-rect.left - 8;
    var y = -HEIGHT/2 + event.clientY-rect.top - 8;
    var angle = Math.atan2(y,x)/Math.PI *180;
    theplayer.mouseAngle = angle;
}
