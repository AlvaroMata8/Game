//Objeto constructor de Personsaje.

function Character() {
    this.x = 25,
    this.y = 840,
    this.speed = 3,
    this.vy = 0,
    this.vx = 0,
    this.width = 10,
    this.height = 10,
    this.color = "#9b00ef",
    this.orders = [false, false, false],
    this.friction = 0.8,
    this.gravity = 0.2;
    this.jumping = false;
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

  if (this.y >= 840) {
    this.y = 840;
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
