//Aqui se ejecuta el juego ,eventos de teclado etc.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


window.onload = function () { 
  var player = new Character();

  var update = function(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.render();
    player.updateChar();
    window.requestAnimationFrame(update);
    
  };
  requestAnimationFrame(update);
  
  ////////////////// movimiento del PLAYER
  document.onkeydown = (function(e){
    switch(e.keyCode){

      case 37: // izquierda
      player.move(-1)
      break;

      case 39: // derecha
      player.move(1) 
      break;

      case 38: //arriba
      player.moveUp();
      console.log(38)
      break;
    }
  });

  // document.onkeyup = (function(e){ ////para hacer bajar el character
  //   if(e.keyCode = 38){
  //   if(player.y > 20){
  //     player.moveDown();
  //   }
  // }
  // })
  
  $("body").keyup(function(e){
    player.stop(); 
  }); 
}




// function update(){
//     player.draw();
//     lvl.drawB();
//     window.requestAnimationFrame(update);
// }
// window.requestAnimationFrame(update);