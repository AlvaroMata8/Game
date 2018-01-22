//Objeto constructor de Personsaje.

function Character(maxSpeed,x,y){
  this.maxSpeed = maxSpeed;
  this.pos = {X:x, Y:y}
  this.speed = 0;
}

Character.prototype.draw = function(){
  
  ctx.fillStyle= "#ff0000";
  ctx.fillRect(25,700,this.width, this.height);

}

Character.prototype.move = function(direction){
 this.speed = this.maxSpeed * direction;
}
Character.prototype.stop = function(){
  this.speed = 0;
}
Character.prototype.render = function(delta){
 this.pos.X += this.speed/1000*delta;
 ctx.fillRect(this.pos.X, this.pos.Y, 40, 40);
}

// function Character() {
        
//   this.width = 50;
//   this.height= 50;
//   this.x = 0;
//   this.y = 0;
//   this.vx = 0;
//   this.vy = 0;
//   this.speed = 10;
// }


// Character.prototype.moveLeft = function(){ 
//   this.x -= this.vx;
// };

// Character.prototype.moveRight = function(){
//   this.x += this.vx;
// };

































//Character.prototype.moveIt = function(e){
 
//     if(e.keyCode == 87)
//     {
//         this.y -= 10;
//         // ctx.fillRect(x,y,30,30);
//     }

//     if(e.keyCode == 65)
//     {       
//         this.x -= 10;
//         // ctx.fillRect(x,y,30,30);
//     }
//     if(e.keyCode == 68)
//     {        
//         this.x += 10;
//         // ctx.fillRect(x,y,30,30);
//     }


// }