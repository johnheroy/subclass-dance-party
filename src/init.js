$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var DancerClassName = $(this).data("dancer-class-name");

    // get the maker function for the kind of dancer we're supposed to make
    var DancerClass = window[DancerClassName];

    // make a dancer with a random position

    var dancer = new DancerClass(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log($('body').height());
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click',function(){
    for(i=0;i < window.dancers.length;i++){
      window.dancers[i].lineUp();
    }
  });

  $('#floor').change(function(){
    var $audio = $('#background_audio');
    $('body').css('background-image', 'url(background/' + $(this).val() + '.gif)');
    $('audio source').attr('src',"audio/" + $(this).val() +".mp3");
    $audio[0].pause();
    $audio[0].load();
    $audio[0].play();
  });

  $('.congaButton').on('click',function(){
    $('audio source').attr('src', "audio/conga.mp3");
    var $audio = $('#background_audio');
    $audio[0].pause();
    $audio[0].load();
    $audio[0].play();
    for (var i = 0; i < window.dancers.length; i++){
      window.dancers[i].doTheConga();
      window.dancers[i].congoing = true;
    }
  });



});

