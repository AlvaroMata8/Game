// Dibujar el fondo

function Board(heigth,width){


}


Board.prototype.drawB = function(){
    var img = new Image();
    img.onload = function() {
    ctx.drawImage(img, 0, 0,1400,800);
    };
    img.src = './images/background.jpg'
}

Board.prototype.clearB = function(){
    // clearRect(0,0,1400,800);
}

