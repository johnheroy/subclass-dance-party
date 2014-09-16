// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // console.log(top);
  // console.log(left);
  // console.log("Setting Position");
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  this.$node.css({left: 0});
};

Dancer.prototype.getDistance = function(dancer){
  var a = Math.abs(parseInt(this.$node.css("top"), 10)-parseInt(dancer.$node.css("top"), 10));
  var b = Math.abs(parseInt(this.$node.css("left"), 10)-parseInt(dancer.$node.css("left"), 10));
  return Math.sqrt(a*a+b*b);
};
