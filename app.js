var mongojs = require("mongojs");
var db = mongojs('localhost:27017/ShittyGame',['account','progress']);
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/levelmaker',function(req,res){
    res.sendFile(__dirname + '/client/levelmaker/levelmaker.html');
});
app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT||2000);
console.log("started")



var DEBUG = true;


var isValidPassword = function(data,cb){
    db.account.find({username:data.username,password:data.password},function(err,res){
        if(res!=undefined &&res.length>0)
            cb(true);
        else
            cb(false);
    });
}
var isUsernameTaken = function(data,cb){
    db.account.find({username:data.username},function(err,res){
        if(res.length>0)
            cb(true);
        else
            cb(false);
    });
}
var addUser = function(data,cb){
    db.account.insert({username:data.username,password:data.password},function(err){
        cb();
    }); 
}
var savefile = function(data){
    var fs = require('fs');
    fs.writeFile("map.txt", data, function(err) {
        if (err) {
            console.log(err);
        }
    });

}
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
	socket.id = Math.random();
	if(!DEBUG){
	socket.on('signIn',function(data){		
		isValidPassword(data,function(res){
			if(res){
				socket.emit('signInResponse',{success:true});
			} else {
				socket.emit('signInResponse',{success:false});			
			}
		});
	});
	socket.on('signUp',function(data){
		
	isUsernameTaken(data,function(res){
			if(res){
				socket.emit('signUpResponse',{success:false});		
			} else {
				addUser(data,function(){
					socket.emit('signUpResponse',{success:true});					
				});
			}
		});		
    });
    }else{
        socket.emit('signInResponse',{success:true});        
    }
	socket.on('disconnect',function(){
		
	});
	
	socket.on('evalServer',function(data){
		if(!DEBUG)
			return;
		var res = eval(data);
		socket.emit('evalAnswer',res);		
	});
    socket.on('save',function(data){
        console.log(data);
        savefile(data);
    });
});

/*
setInterval(function(){
	
},1000/25);
*/




