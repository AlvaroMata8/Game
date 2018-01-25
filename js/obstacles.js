//Constructor de obstaculos.
// function Obstacles(x,y,width,heigth){
//     this.x = x;
//     this.y = y;
//     this.heigth = heigth;
//     this.width = width;
//     this.color = "#000000";
//     // this.isTouched = false; -------------Propiedad para hacer desaparecer
// }

// Obstacles.prototype.drawObs = function (x,y,width,heigth){
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x,this.y,this.width,this.heigth);
// }

// Obstacles.prototype.delete = function(){
//     if(!this.isTouched){
//         this.isTouched = true;
//     }
// }

//Plataformas
var object = [];

object.push({
    x: 10,
    y: 700,
    width: 70,
    height: 20,
});

object.push({
    x: 220,
    y: 620,
    width: 15,
    height: 20,
});

object.push({
    x: 235,
    y: 610,
    width: 40,
    height: 20,
});

object.push({
    x: 275,
    y: 620,
    width: 15,
    height: 20,
});

object.push({
    x: 220,
    y: 450,
    width: 100,
    height: 20,
});


object.push({
    x: 30,
    y: 520,
    width: 100,
    height: 20,
});

object.push({
    x: 30,
    y: 500,
    width: 70,
    height: 20,
});

object.push({
    x: 30,
    y: 480,
    width: 40,
    height: 20,
});

object.push({
    x: 420,
    y: 450,
    width: 100,
    height: 20,
});

object.push({
    x: 320,
    y: 455,
    width: 100,
    height: 20,
});

object.push({
    x: 565,
    y: 400,
    width: 20,
    height: 40,
});

object.push({
    x: 620,
    y: 450,
    width: 20,
    height: 20,
});

object.push({
    x: 630,
    y: 450,
    width: 20,
    height: 120,
});

object.push({
    x: 640,
    y: 550,
    width: 150,
    height: 20,
});

object.push({
    x: 780,
    y: 450,
    width: 20,
    height: 120,
});

object.push({
    x: 790,
    y: 450,
    width: 20,
    height: 20,
});

object.push({
    x: 655,
    y: 350,
    width: 120,
    height: 20,
});

object.push({
    x: 955,
    y: 650,
    width: 120,
    height: 20,
});

object.push({
    x: 1200,
    y: 550,
    width: 10,
    height: 20,
});

object.push({
    x: 1300,
    y: 450,
    width: 10,
    height: 20,
});

object.push({
    x: 1400,
    y: 350,
    width: 10,
    height: 20,
});

object.push({
    x: 1545,
    y: 280,
    width: 120,
    height: 20,
});
function drawObstacles() {
    for (var i = 0; i < object.length; i++) {
        ctx.fillStyle = "red";
        ctx.fillRect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
};


console.log(object)


















// var obs1 = new Obstacles(10, 700, 70, 20);
// var obs2 = new Obstacles(220, 620, 15, 20);
// var trampilla = new Obstacles(235, 610, 40, 20);
// var obs2_ = new Obstacles(275, 620, 15, 20);
// var obs3 = new Obstacles(220, 450, 100, 20);
// var obs4 = new Obstacles(30, 520, 100, 20);
// var obs5 = new Obstacles(30, 500, 70, 20);
// var obs6 = new Obstacles(30, 480, 40, 20);
// var obs7 = new Obstacles(420, 450, 100, 20);
// var trampa = new Obstacles(320, 455, 100, 20);//desaparece
// var barrera = new Obstacles(565, 400, 20, 40)//se mueve o aparece cuando es golpeada
// var obs8 = new Obstacles(620, 450, 20, 20);
// var obs9 = new Obstacles(630, 450, 20, 120);
// var obs10 = new Obstacles(640, 550, 150, 20);
// var obs11 = new Obstacles(780, 450, 20, 120);
// var obs12 = new Obstacles(790, 450, 20, 20);
// var cuchillos = new Obstacles(655, 350, 120, 20);//se mueve hacia arriba y hacia abajo
// var obs13 = new Obstacles(955, 650, 120, 20)//rebota?
// var square = new Obstacles(1200, 550, 10, 20)
// var square1 = new Obstacles(1300, 450, 10, 20)
// var square2 = new Obstacles(1400, 350, 10, 20)
// var final = new Obstacles(1545, 280, 120, 20)//Desaparece todo suelo menos 1 pixel
// var obstaculos = [
//     obs1, obs2, trampilla, obs2_, obs3, obs4, obs5, obs6, obs7, trampa, barrera,
//     obs8, obs9, obs10, obs11, obs12, cuchillos, obs13, square, square1, square2,
//     final
//   ]
// obs1.drawObs();
// obs2.drawObs();
// obs3.drawObs();
// obs4.drawObs();
// obs5.drawObs();
// obs6.drawObs();
// obs7.drawObs();
// trampa.drawObs();
// barrera.drawObs()
// obs8.drawObs();
// obs9.drawObs();
// obs10.drawObs();
// obs11.drawObs();
// obs12.drawObs();
// cuchillos.drawObs();
// obs13.drawObs();
// square.drawObs();
// square1.drawObs();
// square2.drawObs();
// final.drawObs();
// trampilla.drawObs();
// obs2_.drawObs();
// si la posicion player X e Y es igual a la posicion
// de algun objeto del Array obstaculos
//decirle al personaje donde estan todos los obstaculos¿?¿?
