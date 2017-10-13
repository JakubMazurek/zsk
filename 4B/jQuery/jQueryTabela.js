$(document).ready(function(){
   /*$('tr:even').css('background','#b2aaaa');
   $('tr:odd').css('background','#ede3e3'); */

   $('#tabela1 tr:even').css('background','#b2aaaa');
   $('#tabela1 tr:odd').css('background','#ede3e3');
   $('#tabela1 tr:first').css('background','lime');
   $('#tabela1 tr:last').css('background','lime');
   $('#tabela1 tr:eq(2)').css('background','lime');
   $('#tabela1 td:eq(2)').css('background','lime');
   $('#tabela1 td:contains("Sól")').css('background','brown');
});
