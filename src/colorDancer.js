var ColorDancer = function(top,left,timeBetweenSteps){
  Dancer.apply(this,arguments);
};
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // console.log("Steppinggg in ")
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  this.$node.css("border-color", "rgb(" + [r,g,b].join(",") + ")");
};

