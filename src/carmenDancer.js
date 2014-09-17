var CarmenDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.type = 1;
};

CarmenDancer.prototype = Object.create(Dancer.prototype);
CarmenDancer.prototype.constructor = CarmenDancer;

CarmenDancer.prototype.step = function(){

};

CarmenDancer.prototype.memeify = function(){
  if (this.type === 1){

  }
  var $image = $('<img src="img/' + imageIdx + '.jpeg">');
  this.$node.append($image);
  this.$node.css("border","none");
};


