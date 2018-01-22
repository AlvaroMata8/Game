//Objeto constructor de Personsaje.


function Character(ctx) {
        
        this.posX = 20;
        this.posY = 100;
        this.vx = 0;
        this.vy = 0;
        this.maxSpeed = 10;


    //   var img = new Image();
    //   img.onload = function() {
    //   img.src = './images/character.png';
    // ctx.drawImage(img, 0, 600,120,120);
        
     
  }
   Character.prototype.draw = function(ctx){
    ctx.fillRect(25,700,50,50);
    ctx.fillStyle= "#ff0000"
   }



