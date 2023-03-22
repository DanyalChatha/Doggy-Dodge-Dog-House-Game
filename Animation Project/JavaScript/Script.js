   var gameOver = document.getElementById("GameOver");
   var button = document.getElementById("resetButton");
   var cloud = document.getElementById('cloud');

   button.style.display = 'none';
   
   button.onclick = Refresh
   function Refresh (){
   window.location.reload()
   }

let character = document.getElementById('character');
let block = document.getElementById('block');
const jump = function() {
 if(character.classList !== 'jumping'){
  character.classList.add('jumping');
 }
 setTimeout(function(){
  character.classList.remove('jumping');
 }, 500);
}
document.addEventListener('click', jump);

let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = 
   parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft<10 && blockLeft > 0 && characterTop >= 130){
     block.style.animation = 'none';
     character.style.animation = 'none';
     cloud.style.animation = 'none';
     button.style.display = 'block'
     gameOver.innerHTML = "GAME OVER"; 
    };
   }, 10);

