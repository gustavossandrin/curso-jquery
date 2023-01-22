// Clonando um Elemento OBS: se colocar o parametro True dentro da chamada da função clone, o elemento clonado vai possuir as mesmas funções que o elemento original
// let el = $('.title').clone(true);


$('.title').click(function(){
    $(this).css('outline', '5px solid red')
})


let el = $('.title').clone(true);
el.appendTo('section main')


//
$('#register .field:eq(0)').click(function(){
    $(this).css('color', 'green')
})