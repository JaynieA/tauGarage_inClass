console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // button click event for testButton
  $( '#parkCarButton' ).on( 'click', function(){
    console.log( 'parkCarButton clicked...' );

    // get user input & save it in an object
    var newCar ={
      year: $( '#year' ).val(),
      make: $( '#make' ).val(),
      model: $( '#model' ).val(),
      description: $( '#description' ).val(),
      imageUrl: $( '#imageUrl' ).val()
    }; // end newCar object  );
    console.log( 'adding:', newCar );
  }); // end on click for #parkCarButton
}); // end doc ready
