var garage = [];
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
    // push the car into the garage
    garage.push( newCar );
    displayGarage();
  }); // end on click for #parkCarButton

  var displayGarage = function(){
    console.log( 'in displayGarage:', garage );
  }; // end displayGarage
}); // end doc ready
