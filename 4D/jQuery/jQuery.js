$(document).ready(function(){
   $('div').css('background', 'yellow');
   jQuery('.tekst').css('background', 'teal');
   jQuery("#id1").css('background', 'red');
    $('#id2').css('color', 'white');
    $('#id1').css({'background':'white','color':'green'});
    $('p').css('color','brown');
    $('*').css('font-family', 'arial', 'verdana');
    $('*').css('color', 'black');
    $('*').css({'color':'red','font-size':'120%'});

    $('button').click(function(){
        $('#przyciskTekst').css('color','lime');
    })

    $('#ukryjAkapit').click(function(){
        //$('#akapit').hide();
        //$('#akapit').hide('slow');
        $('#akapit').hide(3000);
    })

     $('#pokazAkapit').click(function(){
        //$('#akapit').show();
        //$('#akapit').show('slow');
        $('#akapit').show(3000);
    })

    $('#zmienHtml').click(function(){
        $('#html').html('<h1>Zmieniony tekst</h1>')
    })

    $('a').css('color','green');
    $('#link a').css('color','black');

    $('#kolorInny').click(function(){
        $('input[type="text"]').css('background','brown');
    })

















});

