$(document).ready(function(){
    /*$('tr:even').css('background','#b2aaaa');
    $('tr:odd').css('background','#dbd1d1');*/

    $('#tabela1 tr:even').css('background','#d45a5a');
    $('#tabela1 tr:odd').css('background','#5aa5d4');
    $('#tabela1 tr:first').css('background','#5ad45f');
    $('#tabela1 tr:last').css('background','#5ad45f');
    $('#tabela1 tr:eq(3)').css('color','white');
    $('#tabela1 td:eq(3)').css('color','white');
    $('#tabela1 td:contains("Sól")').css('background','#b20000');

    $('#widoczny').click(function(){
        $('#obraz').show(3000);
    })

    $('#niewidoczny').click(function(){
        $('#obraz').hide(1500);
    })

});
