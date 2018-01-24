//Constructor de obstaculos.

var Lvl = [
    ["                                                                                "],
    ["                                                                                "],
    ["                                                                                "],
    ["                                                                                "],
    ["                                                                                "],
    ["                                                                                "],
    ["                                                                  xxx           "],
    ["                                                   xx      xx    xx!xx          "],
    ["                                    o o      xx                  x!!!x          "],
    ["                                                                 xx!xx          "],
    ["                                   xxxxx                          xvx           "],
    ["                                                                            xx  "],
    ["  xx                                      o o                                x  "],
    ["  x                     o                                                    x  "],
    ["  x                                      xxxxx                             o x  "],
    ["  x          xxxx       o                                                    x  "],
    ["  x  @       x  x                                                xxxxx       x  "],
    ["  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  "],
    ["                              x   x                  x     x                    "],
    ["                              x!!!x                  x!!!!!x                    "],
    ["                              x!!!x                  x!!!!!x                    "],
    ["                              xxxxx                  xxxxxxx                    "],
    ["                                                                                "],
    ["                                                                                "],
]
function Wash() {
    this.color = "#FFF";
    this.width = 20;
    this.height = 20;
}

Wash.prototype.drawIt = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(arrayX, arrayY, this.width, this.height)//////pasar como eje X y eje Y los arrays de Lvl
}

Wash.prototype.MapConstructor = function () {//////////recorre Lvl para ver 
    Lvl.forEach(function (e, i) {
        //console.log(i);
        //console.log(i);
        e.forEach(function (u) {
            for (j = 0; j < u.length; j++) {
                //console.log([0]j);

                console.log("INDICES", i, j, Lvl[i][0][j])
            }
        })
    })
}