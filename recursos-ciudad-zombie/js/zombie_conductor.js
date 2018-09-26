/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductorVertical = function(x, velocidad) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this,'imagenes/tren_vertical.png', x, 0, 30, 90, velocidad, {desdeY: 0, hastaY: 487});
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

/* Completar creacion del ZombieConductor */
ZombieConductorVertical.prototype = Object.create(Enemigo.prototype);
ZombieConductorVertical.prototype.constructor = ZombieConductorVertical;
/* Completar metodos para el movimiento y el ataque */
ZombieConductorVertical.prototype.mover = function() {
  this.y += this.velocidad;
  
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }
}

ZombieConductorVertical.prototype.atacar = function(jugador){ 
  jugador.perderVidas(5);  
  document.getElementById('crash').currentTime = 0;                  
  document.getElementById('crash').play();                   
}


var ZombieConductorHorizontal = function(y, velocidad){

  Enemigo.call(this, 'imagenes/tren_horizontal.png', 400, 322, 90, 30, velocidad, {desdeX: 0, hastaX: 871});
}

ZombieConductorHorizontal.prototype = Object.create(Enemigo.prototype);
ZombieConductorHorizontal.prototype.constructor = ZombieConductorHorizontal;

ZombieConductorHorizontal.prototype.mover = function(){
  this.x += this.velocidad;

  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }
}
ZombieConductorHorizontal.prototype.atacar = function(jugador){ 
  jugador.perderVidas(5);  
  document.getElementById('crash').currentTime = 0;                  
  document.getElementById('crash').play();                   
}