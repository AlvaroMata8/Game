
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

  var player = new Character();
  
  
  var update = function () {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render();
    player.updateChar();
    player.moveOrder();
    drawObstacles()
    collisionDetection();
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


      function collisionDetection (){
        
        objects.forEach(function(object){
          
          if(object.y + object.height == player.y + player.height){
            console.log("pinto")
              }
            })
          }
        
// var vectorX = (that.x + (that.width / 2)) -  (object.x +  (object.width / 2));
// var vectorY = (that.y + (that.height / 2)) -  (object.y +  (object.height / 2));
        
// var halfWidths = (that.width / 2) +  (object.width / 2);
// var halfHeights = (that.height / 2) +  (object.height / 2);
        
// var collisionDirection = null;
        
// if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
//   var offsetX = halfWidths - Math.abs(vectorX);
//   var offsetY = halfHeights - Math.abs(vectorY);
//   if (offsetX < offsetY) {
//     if (vectorX > 0) {
//       collisionDirection = "left";
//       that.x += offsetX;
//     } else {
//       ollisionDirection = "right";
//       that.x -= offsetX;
//     }
//   } else {
//     if (vectorY > 0) {
//       collisionDirection = "top";
//       that.y += offsetY;
//     } else {
//       collisionDirection = "bottom";
//       that.y -= offsetY;
//     }
//   }
 // };
// return collisionDirection;
