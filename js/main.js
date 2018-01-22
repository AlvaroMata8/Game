//Aqui se ejecuta el juego ,eventos de teclado etc.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.onload = function () {
    var lvl = new Board();
    var player = new Character();
     

    document.addEventListener("keydown",function(event){
        moveIt(event);
        
    })

    
    lvl.drawB();
    
    player.draw();
    
    function draw(){
        player.draw(lvl.ctx);
    }
    setInterval(draw,1)

    function moveIt(e){
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
}



