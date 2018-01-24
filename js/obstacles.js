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
function Wash (){
    this.color = "#FFF";
    this.width = 20;
    this.height = 20;
}

Wash.prototype.drawIt = function(){
    ctx.fillStyle= this.color;
    ctx.fillRect(arrayX,arrayY,this.width,this.height)
}

Wash.prototype.MapConstructor = function(){

}