//Aqui se ejecuta el juego ,eventos de teclado etc.
window.onload = function () {
    var lvl = new Board();
    var player = new Character();
     
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    document.addEventListener("keydown",function(event){
        moveIt(event);
        
    })



    
    Board();
    update();
    draw(lvl);
    
    function draw(){
        player.draw(lvl.ctx);
    }
    
    setInterval(draw,1)


    function update() {
        player.x += player.vx;
        player.y += player.vy;
    }

    function moveIt(e){
        if(e.keyCode == 38)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            player.posY -=  10;
            // ctx.fillRect(x,y,30,30);
        }
        if(e.keyCode == 40)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            player.posY += 10;
            // ctx.fillRect(x,y,30,30);
        }
        if(e.keyCode == 37)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            player.posX -= 10;
            // ctx.fillRect(x,y,30,30);
        }
        if(e.keyCode == 39)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            player.posX += 10;
            // ctx.fillRect(x,y,30,30);
    }

    }
}


