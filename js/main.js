
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player = new Character();
var obs = [];

function createObstacles() {
  objects.forEach(function (e) {
    obs.push(new Obstacles(e));
  })
}

createObstacles()

function drawObstacles() {
  obs.forEach(function (e) {
    e.draw()
    e.image.src = "./images/textura.jpg";
  })
}


var update = function () {
  if(player.platformY== 840){
    
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.render();
  player.updateChar();
  player.moveOrder();
  drawObstacles()
  player.platformY =  840;
  platformPlayerUpdate()

  requestAnimationFrame(update);
};

requestAnimationFrame(update);


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

function platformPlayerUpdate() {
  obs.forEach(function (object) {
    if(player.vy>0){
      if(player.x >= object.x && player.x<=object.x+object.width&&player.y<=object.y + 20&&player.y>=object.y){
        player.platformY=object.y-player.height
        //x: 20, y: 704.1999999999996
        object.isActive = true;
      }
      else{
        //object.isActive = false;
      }
    }
  })
}