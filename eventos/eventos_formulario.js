// Evento para quando o elemento receber o foco
/*
$('[name]').focus(function(){
    $(this).css('background', 'yellow')
})
*/

// Evento para quando o elemento perder o foco
/*
$('[name]').blur(function(){
    alert(`voce digitou ${$(this).val()}`)
})
*/

// Evento para quando o elemento receber foco mesmo que seja um elemento filho
/*
$('.form-group').focusin(function(){
    console.log('voce selecionou um campo')
})
*/

// Evento para quando o elemento perder o foco mesmo que seja um elemento filho
/*
$('.form-group').focusout(function(){
    console.log('voce desfocou um campo')
})
*/

// Evento para quando o elemento mudar seu valor
/*
$('[name]').change(function(){
    console.log(`Valor do campo: ${$(this).val()}`)
})
*/

// Evento para quando selecionarmos o valor de um campo do formulario
$('[type=text]').select(function(){
    console.log('voce selecionou o valor deste campo')
})

$('form').submit(function(event){
    event.preventDefault();
    console.log($(this).serializeArray())
})

$('#link_logo').click(function(event){
    event.preventDefault();
    $(this).find('img').attr('src', 'img/logo_jquery.png')

})