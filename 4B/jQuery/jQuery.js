 jQuery(document).ready(function(){
     $('#tekst').click(function(){
         //$('#lorem').toggle();
         //$('#lorem').toggle('slow');
         //$('#lorem').toggle('normal');
         //$('#lorem').toggle('fast');
         $('#lorem').toggle(1000);
         $('div').css('background','yellow');

         $('.tekst').css('background','teal');
         $('#id1').css('background','red');
         $('#id2').css('color','white');
         $('#id1').css({'background':'white','color':'red'})
         $('p').css('font-family','arial','verdana');
         $('p').css({'color':'red','font-size':'120%'});
     })

     $('#zmienKolor').click(function(){
   $('#kolor').css('color','lime');
});
 });




