//Aqui se ejecuta el juego ,eventos de teclado etc.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


window.onload = function () { 
  var player = new Character();

  var update = function(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.render();
    player.updateChar();
    player.moveOrder();
    window.requestAnimationFrame(update);
    
  };
  requestAnimationFrame(update);
  
  ////////////////// movimiento del PLAYER
  document.onkeydown = (function(e){
    switch(e.keyCode){

      case 37: // izquierda
      player.orders[0] = true;
      break;

      case 39: // derecha
      player.orders[1] = true; 
      break;

      case 38: //arriba
      player.orders[2] = true;
    
      break;
    }
  })
    document.onkeyup = (function(e){
      switch(e.keyCode){
  
        case 37: // izquierda
        player.orders[0] = false;
        break;
  
        case 39: // derecha
        player.orders[1] = false; 
        break;
  
        case 38: //arriba
        player.orders[2] = false;
      
        break;
      }
  });
}
