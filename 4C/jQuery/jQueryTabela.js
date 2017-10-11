$(document).ready(function(){
    /*$('tr:even').css('background','#b2aaaa');
    $('tr:odd').css('background','#f5e8e8');*/

    $('#tabela1 tr:even').css('background','#b2aaaa');
    $('#tabela1 tr:odd').css('background','#f5e8e8');
    $('#tabela1 tr:first').css('background','#2daaed');
    $('#tabela1 tr:last').css('background','#2daaed');
    $('#tabela1 tr:eq(3)').css('background','#5f4f0a');
    $('#tabela1 td:contains("Sól")').css('background','#d31d7f');

    $('p:hidden').show(3000);

    $('#niewidoczny').click(function(){
        $('#ukryty').hide(1500);
        $('#obraz').hide(1500);
    })

    $('#widoczny').click(function(){
        $('#ukryty').show(1500);
        $('#obraz').show(1500);
    })


});
