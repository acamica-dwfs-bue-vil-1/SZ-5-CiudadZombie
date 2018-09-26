/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas

  Obstaculo.prototype.chocar = function (jugador) {
    if (this.primerChoque) {
      jugador.perderVidas(this.potencia);
      this.primerChoque = false;
      this.potencia = 0;    
    }
    jugador.perderVidas(this.potencia);
  }
}

var VallaHorizontal = function (x, y){
  
  Obstaculo.call(this,'imagenes/valla_horizontal.png', x, y, 30, 30, 1);
}
VallaHorizontal.prototype = Object.create(Obstaculo.prototype);
VallaHorizontal.prototype.constructor = VallaHorizontal;

var VallaVertical = function (x, y){

  Obstaculo.call(this,'imagenes/valla_vertical.png',x, y, 30, 30, 1);
}

VallaVertical.prototype = Object.create(Obstaculo.prototype);
VallaVertical.prototype.constructor = VallaVertical;

var Bache = function (x, y){

  Obstaculo.call(this, 'imagenes/bache.png', x, y, 30, 30, 2);
}

Bache.prototype = Object.create(Obstaculo.prototype);
Bache.prototype.constructor = Bache;

var AutoVerdeAbajo = function (x, y){

  Obstaculo.call(this, 'imagenes/auto_verde_abajo.png', x, y, 15, 30, 3);
}

AutoVerdeAbajo.prototype = Object.create(Obstaculo.prototype);
AutoVerdeAbajo.prototype.constructor = AutoVerdeAbajo;

var AutoVerdeDerecha = function (x, y){

  Obstaculo.call(this, 'imagenes/auto_verde_derecha.png', x, y, 30, 15, 3);
}

AutoVerdeDerecha.prototype = Object.create(Obstaculo.prototype);
AutoVerdeDerecha.prototype.constructor = AutoVerdeDerecha;