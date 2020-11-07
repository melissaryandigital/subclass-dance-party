var NervousDancer = function (top, left, timeBetweenSteps, dancerId) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('nervous-dancer');
  this.dancerId = dancerId;
  this.$node.attr('id', dancerId);
  this.class = 'nervous';
};

NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;

NervousDancer.prototype.avoid = function() {
  var direction = Math.ceil(Math.random() * Math.floor(4));
  if (direction === 1) {
    this.top -= 100;
  } else if (direction === 2) {
    this.left += 100;
  } else if (direction === 3) {
    this.top += 100;
  } else if (direction === 4) {
    this.left -= 100;
  }
  var styleSettings = {
    top: this.top,
    left: this.left,
  };

  this.$node.css(styleSettings);
};