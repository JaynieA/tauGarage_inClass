console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // button click event for testButton
  $( '#testButton' ).on( 'click', function(){
    console.log( 'button clicked...' );
  }); // end on click for #testButton
}); // end doc ready
