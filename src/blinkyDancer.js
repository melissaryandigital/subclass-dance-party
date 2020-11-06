var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  //don't know if that's the right way to do the variable but we'll see!
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.fadeIn("fast");
};