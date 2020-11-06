describe('nervousDancer', function() {
  var nervousDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    nervousDancer = new NervousDancer(10, 20, timeBetweenSteps, 4);
  });

  it('should have an avoid function that moves the dancer away from mouse', function() {
    //sinon.spy(nervousDancer.$node, 'toggle');
    nervousDancer.avoid();
    expect(nervousDancer.avoid.called).to.be.true;
  });


});