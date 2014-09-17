// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.congoing = false;
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

Dancer.prototype.onHover = function(callback){
  this.$node.on('mouseover', callback.bind(this));
};

Dancer.prototype.tracker = function(callback){
  var that = this;
  $('body').mousemove(function(event){
    callback.call(that,event);
  });
};

Dancer.prototype.travel = function(event){
  // var pageX = event.pageX;
  var pageY = event.pageY;
  var newSize = (1000 - pageY) / (Math.random() * 30);
  this.$node.css({
    'border-radius': newSize,
    'border-width': newSize
  });
};

Dancer.prototype.doTheConga = function () {
  var visited = [false,false,false,false,false,false];
  var dancer = this;
  var congoLine = setInterval((function(){
    var i = 0;
    while(i < visited.length){
      debugger;
      if(!visited[i]){
        break;
      }
      i++;
    }
    if(i === visited.length){
      clearInterval(congoLine);
    }
    var waypoint = waypoints[i];
    var currTop = parseInt(this.$node.css("top"), 10);
    var currLeft = parseInt(this.$node.css("left"), 10);
    var dist = Math.sqrt(Math.pow(currTop - waypoint.top,2) + Math.pow(currLeft - waypoint.left,2));
    var moveX =  20 * (waypoint.left - currLeft)/dist;
    var moveY =  20 * (waypoint.top - currTop)/dist;
    this.$node.css({
      'top':currTop + moveY,
      'left':currLeft + moveX
    });
    currTop = parseInt(this.$node.css("top"), 10);
    currLeft = parseInt(this.$node.css("left"), 10);
    if(Math.abs(currTop - waypoint.top) < 50 &&Math.abs(currLeft - waypoint.left) < 50 ){
      visited[i] = true;
      this.congoing = false;
    }
    // check for the next one to move to and move
    // if all of them are visited


  }).bind(dancer), 200);
};



