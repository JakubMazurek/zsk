$(document).ready(function(){
    /*$('tr:even').css('background','#b2aaaa');
    $('tr:odd').css('background','#f7f0f0');*/

    $('#tabela1 tr:even').css('background','#b2aaaa');
    $('#tabela1 tr:odd').css('background','#f7f0f0');
    $('#tabela1 tr:first').css('background','#419aaf');
    $('#tabela1 tr:last').css('background','#419aaf');
    $('#tabela1 tr:eq(2)').css('background','#419aaf');
    $('#tabela1 td:contains("Olej")').css('background','red');

    $('#ukryty:hidden').show(3000);

    $('#widoczny').click(function(){
        $('#obraz').show(1500);
    })

     $('#niewidoczny').click(function(){
        $('#obraz').hide(1500);
    })









})
