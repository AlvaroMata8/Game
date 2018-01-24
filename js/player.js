//Objeto constructor de Personsaje.

function Character(){
  this.x = 25,
  this.y = 780,
  this.speed = 3,
  this.vy = 0,
  this.vx = 0,
  this.width = 10,
  this.height = 10,
  this.color = "#FF0000",
  this.orders = [false,false,false],
  this.friction = 0.8,
  this.gravity = 0.2;
}


Character.prototype.render = function(){
 ctx.fillStyle = this.color;
 ctx.fillRect(this.x, this.y,this.width,this.height);
}
Character.prototype.updateChar = function(direction){
  this.vx += this.friction;
  this.vy += this.gravity;
  this.x += this.vx;
  this.y += this.vy;

    if(this.x >= 1800){
      this.x = 1790;
    }else if(this.x < 0){
      this.x = 0;
    }
}


// Character.prototype.moveDown = function(){
//     if(this.y >= 725 - 10){
//       this.y += 100 ;
//       this.jumping = false;
//     }
// }

// /////////////////PARA SUBIR
// if (keys[38] || keys[32]) {
//   // up arrow or space
// if(!player.jumping){
//  player.jumping = true;
//  player.velY = -player.speed*2;
// }
// }
// /////////////////////////PARA DERECHA
// if (keys[39]) {
//   // right arrow
//   if (player.velX < player.speed) {
//       player.velX++;
//   }
// }
// ////////////////////////////PAra IZQUIERDA
// if (keys[37]) {
//   // left arrow
//   if (player.velX > -player.speed) {
//       player.velX--;
//   }
// }

// player.velX *= friction;

// player.velY += gravity;

// player.x += player.velX;
// player.y += player.velY;

// if (player.x >= width-player.width) {
//   player.x = width-player.width;
// } else if (player.x <= 0) {
//   player.x = 0;
// }

// if(player.y >= height-player.height){
//   player.y = height - player.height;
//   player.jumping = false;
// }