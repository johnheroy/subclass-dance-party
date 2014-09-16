var MemeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.memeify();
};

MemeDancer.prototype = Object.create(Dancer.prototype);
MemeDancer.prototype.constructor = MemeDancer;

MemeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.effect("bounce", "slow");
};

MemeDancer.prototype.memeify = function(){
  console.log("Inserting Images");
  var imageIdx = Math.ceil(Math.random() * 9);
  var $image = $('<img src="img/' + imageIdx + '.jpeg">');
  this.$node.append($image);
  this.$node.css("border","none");
};
