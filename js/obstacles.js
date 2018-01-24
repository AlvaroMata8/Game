//Constructor de obstaculos.

function Obstacle() {
    this.x = 220;
    this.y = 270;
    this.width = 100;
    this.height = 32;
}
Obstacle.prototype.drawObs =function () {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
