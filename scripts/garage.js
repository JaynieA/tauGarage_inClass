console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // button click event for testButton
  $( '#parkCarButton' ).on( 'click', function(){
    console.log( 'parkCarButton clicked...' );
  }); // end on click for #parkCarButton
}); // end doc ready
