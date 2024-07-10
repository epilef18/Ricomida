$(document).ready(function(){
  $('#botoncorreo').on('click',function(){
      alert('El correo fue enviado correctamente...')
  });       
});

$(document).ready(function(){
  var divdbl = $( "ingredientes" ).first();
  divdbl.on( "dblclick", function() {
  divdbl.toggleClass( "dbl" );
  } );     
});

