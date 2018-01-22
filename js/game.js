// Recoge las instancias de los otros constructores


function Board(){
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function() {
    ctx.drawImage(img, 0, 0,1400,800);
    };
    img.src = './images/background.jpg';
}


