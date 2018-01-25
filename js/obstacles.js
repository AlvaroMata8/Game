//Constructor de obstaculos.
function Obstacles(x,y,width,heigth){
    this.x = x;
    this.y = y;
    this.heigth = heigth;
    this.width = width;
    this.color = "#000000";
    // this.isTouched = false; -------------Propiedad para hacer desaparecer etc
}

Obstacles.prototype.drawObs = function (x,y,width,heigth){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.heigth);
}

Obstacles.prototype.delete = function(){
    if(!this.isTouched){
        this.isTouched = true;
    }
}

// si la posicion player X e Y es igual a la posicion
// de algun objeto del Array obstaculos
//decirle al personaje donde estan todos los obstaculos¿?¿?
