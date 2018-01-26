//Objeto constructor de Personsaje.

function Character() {
    this.x = 20,
    this.y = 300,
    this.speed = 3,
    this.vy = 0,
    this.vx = 0,
    this.width = 10,
    this.height = 10,
    this.color = "#f200ea",
    this.orders = [false, false, false],
    this.friction = 0.8,
    this.gravity = 0.2;
    this.jumping = false;
    this.hit = false;
}


Character.prototype.render = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
Character.prototype.updateChar = function (direction) {
  this.vx *= this.friction;
  this.vy += this.gravity;
  this.x += this.vx;
  this.y += this.vy;

  if (this.x >= 1790) {
    this.x = 1790;
  } else if (this.x <= 0) {
    this.x = this.width;
  }

  if (this.y >= 690) {
    this.y = 690;
    this.jumping = false;
  }
}

Character.prototype.moveLeft = function () {
  if (this.vx > - this.speed) {
    this.vx--;
  }
}

Character.prototype.moveRight = function () {
  if (this.vx < this.speed) {
    this.vx++;
  }
}

Character.prototype.moveUp = function () {
  if (!this.jumping) {
    this.jumping = true;
    this.vy = -this.speed * 2;
  }
}

Character.prototype.moveOrder = function () {
  if (this.orders[0] == true) {
    this.moveLeft();
  } if (this.orders[1] == true) {
    this.moveRight();
  } if (this.orders[2] == true) {
    this.moveUp();
  }
}

// Character.prototype.collision = function () {
  
//   var that = this;
//     object.forEach(function(){

//   var vectorX = (that.x + (that.width / 2)) -  (object.x +  (object.width / 2));
//   var vectorY = (that.y + (that.height / 2)) -  (object.y +  (object.height / 2));

//   var halfWidths = (that.width / 2) +  (object.width / 2);
//   var halfHeights = (that.height / 2) +  (object.height / 2);

//   var collisionDirection = null;

//   if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
//     var offsetX = halfWidths - Math.abs(vectorX);
//     var offsetY = halfHeights - Math.abs(vectorY);
//     if (offsetX < offsetY) {
//       if (vectorX > 0) {
//         collisionDirection = "left";
//         that.x += offsetX;
//       } else {
//         ollisionDirection = "right";
//         that.x -= offsetX;
//       }
//     } else {
//       if (vectorY > 0) {
//         collisionDirection = "top";
//         that.y += offsetY;
//       } else {
//         collisionDirection = "bottom";
//         that.y -= offsetY;
//       }
//     }
//   };
//   return collisionDirection;
// })
// };

// si la posicion player X e Y es igual a la posicion
// de algun objeto del Array obstaculos
//Decirle al player donde estan los obstaculos para que colisiones y no 
//renderizar todo el mapa todo el rato