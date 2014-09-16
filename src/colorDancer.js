var ColorDancer = function(top,left,timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.onHover(ColorDancer.prototype.avoid);
  this.tracker(this.travel);

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

ColorDancer.prototype.avoid = function(){
  var currTop = parseInt(this.$node.css("top"), 10);
  var currLeft = parseInt(this.$node.css("left"), 10);
  var moveX = Math.random() * 400 - 200;
  var moveY = Math.random() * 400 - 200;
  this.$node.animate({
    top: currTop + moveY,
    left: currLeft + moveX
  }, 500);
};
