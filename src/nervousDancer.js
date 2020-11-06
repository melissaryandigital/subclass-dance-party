var NervousDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  //don't know if that's the right way to do the variable but we'll see!
};

NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;


// NervousDancer.prototype.step = function () {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
//   this.$node.fadeIn("fast");
// };