$(document).ready(function () {
  window.dancers = [];

  // Assigns an ID to all dancers
  var id = 0;

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      id
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    id++;


    // Dancer Interaction Call

    if (dancerMakerFunctionName === 'NervousDancer') {
      interaction(dancer);
    }
  });


  // Line Up Button Interaction

  $('.lineUpButton').on('click', function () {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });



  // Mouseover Interaction

  $('body').on('mouseover', '.nervous-dancer', function () {

    // Each nervous dancer has an id
    // Mouseover function gets the id attribute
    // Look in window.dancers and find the object with the matching ID
    // Call the avoid method on that particular object

    var nervousguy = window.dancers[this.id];
    nervousguy.avoid();

  });

  var interaction = function (dancer) {

    // Iterate through existing window dancers
    for (var i = 0; i < window.dancers.length; i++) {
      var person = window.dancers[i];

      if (dancer.dancerId !== person.dancerId && person.class === 'nervous') {

        let topDist2 = Math.pow(Math.abs(dancer.top - person.top), 2);
        let leftDist2 = Math.pow(Math.abs(dancer.left - person.left), 2);
        var distance = Math.sqrt(topDist2 + leftDist2);

        if (distance < 400) {
          person.$node.fadeOut('slow');
          // change opacity
          // or .fadeOut();
          // we could throw up an alert too that says 'yikes, I spawned too close, I don't like this!' or something silly like that if we wanted to draw more attention to it
        }
      }
    }
  };
});