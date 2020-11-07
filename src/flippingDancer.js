var FlippingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('flipping-dancer');
};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = FlippingDancer;


FlippingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle('slow');
  this.$node.fadeIn('slow');
  this.$node.fadeOut('fast');
};