//Aqui se ejecuta el juego ,eventos de teclado etc.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


window.onload = function () {
  var player = new Character();
  var obs1 = new Obstacles(0,700,70,20);
  var obs2 = new Obstacles(150,620,15,20);
  var trampilla = new Obstacles(165,610,40,20);
  var obs2_ = new Obstacles(205,620,15,20);
  var obs3 = new Obstacles(220,450,100,20);
  var obs4 = new Obstacles(30,520,100,20);
  var obs5 = new Obstacles(30,500,70,20);
  var obs6 = new Obstacles(30,480,40,20);
  var obs7 = new Obstacles(420,450,100,20);
  var trampa = new Obstacles(320,455,100,20);//desaparece
  var barrera = new Obstacles(565,400,20,40)//se mueve o aparece cuando es golpeada
  var obs8 = new Obstacles(620,450,20,20);
  var obs9 = new Obstacles(630,450,20,120);
  var obs10 = new Obstacles(640,550,150,20);
  var obs11 = new Obstacles(780,450,20,120);
  var obs12 = new Obstacles(790,450,20,20);
  var cuchillos = new Obstacles(655,350,120,20);//se mueve hacia arriba y hacia abajo
  var obs13 = new Obstacles(955,650,120,20)//rebota?
  var square = new Obstacles(1200,550,10,20)
  var square1 = new Obstacles(1300,450,10,20)
  var square2 = new Obstacles(1400,350,10,20)
  var final = new Obstacles(1545,280,120,20)//Desaparece todo suelo menos 1 pixel
  var update = function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render();
    player.updateChar();
    player.moveOrder();
    obs1.drawObs();
    obs2.drawObs();
    obs3.drawObs();
    obs4.drawObs();
    obs5.drawObs();
    obs6.drawObs();
    obs7.drawObs();
    trampa.drawObs();
    barrera.drawObs()
    obs8.drawObs();
    obs9.drawObs();
    obs10.drawObs();
    obs11.drawObs();
    obs12.drawObs();
    cuchillos.drawObs();
    obs13.drawObs();
    square.drawObs();
    square1.drawObs();
    square2.drawObs();
    final.drawObs();
    trampilla.drawObs();
    obs2_.drawObs();

;    
    
    window.requestAnimationFrame(update);
    
  };
  requestAnimationFrame(update);
  

  ////////////////// movimiento del PLAYER
  document.onkeydown = (function (e) {
    switch (e.keyCode) {

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
  document.onkeyup = (function (e) {
    switch (e.keyCode) {

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
