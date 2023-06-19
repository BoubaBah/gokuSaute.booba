var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacle");


/*funtion pour faire sauter le perso*/
function sauter (){
    if(perso.classList !="animation"){
        perso.classList.add('animation');
    } 
    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
    
}


//verifier si l'obstacle touche le perso


var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var  obstacleLeft =  parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
    
    if (obstacleLeft<20 && obstacleLeft>0 && persoTop>=130){
        obstacle.style.animation = "none";
        alert("vous avez perdu")
    }
},1) 