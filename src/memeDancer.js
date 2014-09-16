var MemeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.onTop = false;
  this.memeify();
};

MemeDancer.prototype = Object.create(Dancer.prototype);
MemeDancer.prototype.constructor = MemeDancer;

MemeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var top = parseInt(this.$node.css("top"), 10);
  // console.log(typeof top);
  if (this.onTop){
    this.$node.animate({"top":top-20+'px'}, 'fast');
    this.onTop = false;
  } else {
    // console.log("Not on top");
    this.$node.animate({"top":top+20+'px'}, 'fast');
    this.onTop = true;
  }
  var shortestDist = 10000 ;
  var closestDancer;
  for (var i = 0;i < window.dancers.length;i++){
    var dancer = window.dancers[i];
    if(dancer instanceof MemeDancer && this!== dancer){
      if(this.getDistance(dancer) < shortestDist){
        shortestDist = this.getDistance(dancer);
        closestDancer = dancer;
      }
    }
  }

  if (closestDancer){
    var x = parseInt(this.$node.css("left"),10) - parseInt(closestDancer.$node.css("left"));
    var y = parseInt(this.$node.css("top"),10) - parseInt(closestDancer.$node.css("top"));
    var moveX = (x*20)/shortestDist;
    var moveY = (y*20)/shortestDist;
    var currTop = parseInt(this.$node.css("top"), 10);
    var currLeft = parseInt(this.$node.css("left"), 10);
    this.$node.animate({
      top:currTop + moveY,
      left:currLeft +moveX
    }, 'fast');
  }
};

MemeDancer.prototype.memeify = function(){
  // console.log("Inserting Images");
  var imageIdx = Math.ceil(Math.random() * 9);
  var $image = $('<img src="img/' + imageIdx + '.jpeg">');
  this.$node.append($image);
  this.$node.css("border","none");
};



