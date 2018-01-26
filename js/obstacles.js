function Obstacles(o){
    this.x = o.x,
    this.y= o.y,
    this.width = o.width,
    this.height = o.height,
    this.image = new Image();
    this.isActive = false;
}
var objects = [];

objects.push({
    x: 10,
    y: 700,
    width: 100,
    height: 20,
});

objects.push({
    x: 220,
    y: 620,
    width: 15,
    height: 20,
});

objects.push({
    x: 235,
    y: 610,
    width: 40,
    height: 20,
});

objects.push({
    x: 275,
    y: 620,
    width: 15,
    height: 20,
});

objects.push({
    x: 220,
    y: 450,
    width: 100,
    height: 20,
});


objects.push({
    x: 30,
    y: 520,
    width: 100,
    height: 20,
});

objects.push({
    x: 30,
    y: 500,
    width: 70,
    height: 20,
});

objects.push({
    x: 30,
    y: 480,
    width: 40,
    height: 20,
});

objects.push({
    x: 420,
    y: 450,
    width: 100,
    height: 20,
});

objects.push({
    x: 320,
    y: 455,
    width: 100,
    height: 20,
});

objects.push({
    x: 565,
    y: 400,
    width: 20,
    height: 40,
});

objects.push({
    x: 620,
    y: 450,
    width: 20,
    height: 20,
});

objects.push({
    x: 630,
    y: 450,
    width: 20,
    height: 120,
});

objects.push({
    x: 640,
    y: 550,
    width: 150,
    height: 20,
});

objects.push({
    x: 780,
    y: 450,
    width: 20,
    height: 120,
});

objects.push({
    x: 790,
    y: 450,
    width: 20,
    height: 20,
});

objects.push({
    x: 655,
    y: 350,
    width: 120,
    height: 20,
});

objects.push({
    x: 955,
    y: 650,
    width: 120,
    height: 20,
});

objects.push({
    x: 1200,
    y: 550,
    width: 20,
    height: 20,
});

objects.push({
    x: 1300,
    y: 450,
    width: 20,
    height: 20,
});

objects.push({
    x: 1400,
    y: 350,
    width: 20,
    height: 20,
});

objects.push({
    x: 1545,
    y: 280,
    width: 120,
    height: 20,
});

Obstacles.prototype.draw = function (){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
}
