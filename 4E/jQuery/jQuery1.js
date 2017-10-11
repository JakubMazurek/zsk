$(document).ready(function(){
   $('div').css('background','yellow');
   $('.tekst').css('background','teal');
   $('#id1').css('background','red');
   $('#id2').css('color','white');
   $('#id1').css({'background':'brown','color':'green'});   $('*').css('font-family','arial','verdana'); $('*').css('color','brown'); $('*').css({'color':'brown','font-size':'90%'});
   $('#btn1').click(function(){
       $('div').css('color','black');
   })

   $('#ukryjAkapit').click(function(){
       //$('#akapit').hide();
       $('#akapit').hide(2000);
   })

   $('#pokazAkapit').click(function(){
       //$('#akapit').show();
       $('#akapit').show('fast');
   })









});
