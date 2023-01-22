// Evento para quando pressionar o mouse
/*
$('h1').mousedown(function(){
    console.log('apertei o mouse')
})
*/

// Evento para quando soltar o mouse que estava pressionado
/*
$('h1').mouseup(function(){
    console.log('soltei o mouse')
})
*/

// Evento para quando pressionarmos e soltarmos o mouse
/*
$('h1').click(function(){
    console.log('apertei e soltei o botao')
})

$('h3.books').click(function(){
    $(this).text('Fui clicado')
})
*/

// Simulando o click de um elemento
// $('h3.books').click()

// Evento para o botão direito do mouse
/*
$('img').contextmenu(function(){
    alert('clicamos com o botao direito')
})
*/

// Simulando o click do botão direito
// $('img').contextmenu()

// Evento para duplo click
/*
$('table tbody tr').dblclick(function(){
    $(this).css({
        background : 'black',
        color : 'white'
    })
})
*/

// Simulando o duplo click
// $('table tbody tr:eq(0)').dblclick()

// evento para quando o cursor passa por cima de um elemento
/*
$('table tbody tr').mouseenter(function(){
$(this).addClass('trselected')
})

// Evento para quando o cursos deixa um elemento
$('table tbody tr').mouseleave(function(){
$(this).removeClass('trselected')
})
*/

// Evento para quando o cursos entra e deixa um elemento
$('table tbody tr').hover(function(){
    $(this).addClass('trselected');
}, function(){
    $(this).removeClass('trselected');  
})

// Evento para quando o mouse se movimento dentro do elemento
/*

$('table tbody tr').mousemove(function(event){
    
    $('h1').text(` Você está na posição X: ${event.pageX} e na posição Y: ${event.pageY}`)
})
*/