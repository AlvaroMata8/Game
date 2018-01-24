//Constructor de obstaculos.
function Obstacles(x,y,width,heigth){
    this.x = x;
    this.y = y;
    this.heigth = heigth;
    this.width = width;
    this.color = "#FF0000";
}

Obstacles.prototype.drawObs = function (x,y,width,heigth){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.heigth);
    console.log("POLLAS")
}