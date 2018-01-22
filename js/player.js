//Objeto constructor de Personsaje.


function Character() {
        
        this.posX = 50;
        this.posY = 50;
        this.vx = 0;
        this.vy = 0;
        this.maxSpeed = 10;


    //   var img = new Image();
    //   img.onload = function() {
    //   img.src = './images/character.png';
    // ctx.drawImage(img, 0, 600,120,120);
        
     
  }

Character.prototype.draw = function(){
    ctx.fillRect(25,700,this.posX, this.posY);
    ctx.fillStyle= "#ff0000"
    
   }

Character.prototype.moveChar = function(){
  ctx.clearRect(0,0,1400,800)
  this.posX += this.vx;
  this.posY += this.vy;

}

