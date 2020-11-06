$(document).ready(function () {
  window.dancers = [];


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

    // get the maker function for the kind of dancer we're supposed to make

    // setting this variable equal to window[makeBlinkyDancer];
    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      id
    );

    // Inserts <span> on page
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    id++;
  });


  // When line up button is clicked
  // Loop through the global dancers array
  $('.lineUpButton').on('click', function () {
    for (var i = 0; i < window.dancers.length; i++) {
      // Change the top property to the same number
      window.dancers[i].lineUp();
    }
  });

  // var avoid = function () {
  //   var direction = Math.ceil(Math.random() * Math.floor(4));
  //   if (direction === 1) {
  //     this.top -= 100;
  //   } else if (direction === 2) {
  //     this.left += 100;
  //   } else if (direction === 3) {
  //     this.top += 100;
  //   } else if (direction === 4) {
  //     this.left -= 100;
  //   }
  //   var styleSettings = {
  //     top: top,
  //     left: left,
  //   };
  //   console.log(top);
  //   this.$node.css(styleSettings);
  //   console.log('hello');
  // };




  $('body').on('mouseover', '.nervous-dancer', function () {

    var nervousguy = window.dancers[this.id];
    nervousguy.avoid();

    // Each nervous dancer has an id
    // mouseover function gets the id attribute
    // window.dancers and find the object with the matching ID
    // Call the avoid function on that particular object

  });


});