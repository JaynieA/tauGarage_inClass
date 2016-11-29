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
    // console.log( 'in displayGarage:', garage );
    // loop through the garage and display each car
    var outputText = '';
    for (var i = 0; i < garage.length; i++) {
      outputText += '<p>' + garage[i].year + ' ' +garage[i].make + ' <strong>' + garage[i].model + '</strong></p>';
      outputText += '<p>' + garage[i].description + '</p>';
      outputText += '<img src="' + garage[i].imageUrl + '" />';
    } // end for
    $( '#outputDiv' ).html( outputText );
  }; // end displayGarage
}); // end doc ready
