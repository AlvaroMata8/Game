//Objeto constructor de Personsaje.


function Character() {
        
  this.posX = 50;
  this.posY = 50;
  this.vx = 0;
  this.vy = 0;
  this.maxSpeed = 10;
}

Character.prototype.draw = function(){
  ctx.fillStyle= "#ff0000"
  ctx.fillRect(25,700,this.posX, this.posY);

}

Character.prototype.moveChar = function(){
  this.posX += this.vx;
  this.posY += this.vy;
}
Character.prototype.moveLeft = function(){ 
  if(this.vx < this.speed){
    return this.vx--;
  }
};

Character.prototype.moveRight = function(){
  if(this.vx > this.speed){
    return this.vx++;
  }
};

Character.prototype.moveIt = function(e){
 
    if(e.keyCode == 87)
    {
        ctx.clearRect(0,0,1400,800);
        player.posY += 10;
        // ctx.fillRect(x,y,30,30);
    }

    if(e.keyCode == 65)
    {
        ctx.clearRect(0,0,1400,800);
        player.posX -= 10;
        // ctx.fillRect(x,y,30,30);
    }
    if(e.keyCode == 68)
    {
        ctx.clearRect(0,0,1400,800);
        player.posX += 10;
        // ctx.fillRect(x,y,30,30);
    }


}
