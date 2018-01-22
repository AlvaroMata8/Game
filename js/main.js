//Aqui se ejecuta el juego ,eventos de teclado etc.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.onload = function () {
  //////////////////////////////////////////////////// Instancias de Board y Character  
    var lvl = new Board();
    var player = [new Character(100,25,700)];
    
    var now = Date.now();
    var delta = 0;
    
    var render = function(){
        then = now;
        now = Date.now();
        delta = now - then;
        ///////////////////////////////////////////////////Borrado de canvas 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        player.forEach(function(c){
            c.render(delta);
        });
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
    
     ///////////////////////////////////////////////// movimiento del PLAYER
    $(document).keydown(function(e){
      switch(e.keyCode){
          case 37: // izquierda
            player.forEach(function(c){
              c.move(-1)
            })
          break;
          case 39: // derecha
            player.forEach(function(c){
              c.move(1)
            })
          break;
      }
    });
    
    $("body").keyup(function(e){
      player.forEach(function(c){
        c.stop();
      });
    });
    // function update(){
    //     player.draw();
    //     lvl.drawB();
    //     window.requestAnimationFrame(update);
    // }
    // window.requestAnimationFrame(update);

}



