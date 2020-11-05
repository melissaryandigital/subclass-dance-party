var FlippingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="flipping-dancer"></span>');
};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = FlippingDancer;


FlippingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
};