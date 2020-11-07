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


    // Dancer Interaction

    // If a new nervous dancer is added
    // And two nervous dancers are within 300 pixels of each other
    // Add a class to them that rotates them quickly
    // Then hides them

    if (dancerMakerFunctionName === 'spinning-dancer') {

      // Get the position of new added nervous dancer
      // jquery position() returns the top and left keys
      // Identify the left and top positions

      // Iterate through existing window dancers
      for (var dancer in window.dancers) {
        // If they are a nervous dancer
        // Return its position
        // Use the distance equation to determine distance between new and current dancer
        // If distance < XXX pixels
        // Invoke animation method on nervous dancer --- or use jQuery to add class
        // Add CSS styles if needed


      }
    }



  });


  // Line Up Button Interaction

  $('.lineUpButton').on('click', function () {
    for (var i = 0; i < window.dancers.length; i++) {
      // Change the top property to the same number
      window.dancers[i].lineUp();
    }
  });


  // Mouseover Interaction

  $('body').on('mouseover', '.nervous-dancer', function () {

    // Each nervous dancer has an id
    // Mouseover function gets the id attribute
    // Window.dancers and find the object with the matching ID
    // Call the avoid method on that particular object

    var nervousguy = window.dancers[this.id];
    nervousguy.avoid();

  });






});