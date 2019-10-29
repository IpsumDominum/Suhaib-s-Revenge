
var menuDiv = document.getElementById('menu');
var menubg = document.getElementById('menuDiv');
var chooseDiv = document.getElementById("target");
var ctxbase = document.getElementById("ctx");
var ctx = ctxbase.getContext("2d");
var ctxUi = document.getElementById("ctx").getContext("2d");

 var screen_menu = document.getElementById("menu");
 //screen_gameover = document.getElementById("gameover");
 //screen_setting = document.getElementById("setting");
     //button_newgame_gameover.onclick = function(){newGame();}; 
     //button_newgame_setting.onclick = function(){newGame();}; 
     //button_setting_gameover.onclick = function(){showScreen(2)};
 // Screens
 // Buttons
 var button_campaign_menu = document.getElementById("campaign_menu");
 var button_highscores_menu = document.getElementById("highscore_menu");
var button_setting_menu = document.getElementById("setting_menu");
 //button_newgame_setting = document.getElementById("newgame_setting");
 //button_newgame_gameover = document.getElementById("newgame_gameover");
 //button_setting_gameover = document.getElementById("setting_gameover");

var levelmaker = function(){
    window.location.href="/levelmaker";
}
// --------------------
showScreen = function(screen_opt){
          switch(screen_opt){
            
              case 0:  signDiv.style.display = 'inline-block';
                      menuDiv.style.display = 'none';
                      chooseDiv.style.display = 'none';
                      menubg.style,display = 'none';
                       break;
                  
              case 1:  signDiv.style.display = 'none';
                        menuDiv.style.display = 'none';
                        menubg.style.backgroundImage = "url('/client/img/Brendan McCane.jpg')";
                        chooseDiv.style.display = 'inline-block';
                        Multiplayer= true;
                       break;

              case 2:  signDiv.style.display = 'none';
                         menuDiv.style.display = 'inline-block';
                         chooseDiv.style.display = 'none';
                       break;
                  
              case 3: signDiv.style.display = 'none';
              menuDiv.style.display = 'inline-block';
              menubg.style,display = 'none';
              chooseDiv.style.display = 'none';
                      break;
            case 4: signDiv.style.display = 'none';
                    menuDiv.style.display = 'none';
                      menubg.style,display = 'none';
                    chooseDiv.style.display = 'none';
                      break;
          }
      }
showScreen(0);
button_campaign_menu.onclick = function(){showScreen(1);};
button_highscores_menu.onclick = function(){showScreen(2);};
button_setting_menu.onclick = function(){showScreen(2);};
