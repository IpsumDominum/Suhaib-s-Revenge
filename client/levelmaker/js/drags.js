function dragstart_handler(ev) {
    if(!chosenMap){
        return;
    }
    console.log("dragStart");
    // Set the drag's format and data. Use the event target's id for the data 
    
    // Create an image and use it for the drag image
    // NOTE: change "example.gif" to an existing image or the image will not
    // be created and the default drag image will be used.
    if(ev.target.nodeName=="IMG"){
        var src = 'client/img/'+ev.target.parentNode.id;
    }else{
        var src = 'client/img/'+ev.target.id;       
    }
    ev.dataTransfer.setData("source",src);
    var img = new Image();  
    img.src = src; 
    ev.dataTransfer.setDragImage(img,img.width/3,img.height/3);
}

function dragover_handler(ev) {
    if(!chosenMap){
        return;
    }
    ev.preventDefault();
}

function drop_handler(ev) {
    if(!chosenMap){
        return;
    }
    console.log("Drop");
    ev.preventDefault();
    // Get the data, which is the id of the drop target
    
    var rect = ctxbase.getBoundingClientRect();
    var img = new Image();
    var src = ev.dataTransfer.getData('source');
    img.onload = function(){
        var locx = ev.clientX-rect.left-img.width/2;
        var locy = ev.clientY-rect.top-img.height/2;
        //socket.emit('addImage',{'x':locx,'y':locy});
        if(src==="client/img/capguy.png"){
            var cropx = img.width/3;
            var cropy = img.height/4;
            ctx.drawImage(img,0,0,cropx,cropy,locx,locy,cropx,cropy);
        }
        else{
            ctx.drawImage(img,ev.clientX-rect.left-img.width/2,ev.clientY-rect.top-img.height/2);
        }
    };
    img.src = src;

    
    //ctx.drawImage(img,ev.clientX-rect.left-img.width/2,ev.clientY-rect.top-img.height/2);
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
}

