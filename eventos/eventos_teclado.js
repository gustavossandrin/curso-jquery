// Evento para quando pressionarmos uma tecla
/*
$('#form_login [name=username]').keydown(function(event){
    console.log(`você apertou a tecla com um código ${event.keyCode}`)
})
*/

// Evento para quando soltarmos uma tecla
/*
$('#form_login [name=username]').keyup(function(event){
    console.log(`você apertou a tecla com um código ${event.keyCode}`)
})
*/

// Evento para quando pressionar uma tecla também OBS: diferente do keydown, esse evento não pega teclas como DELETE, ESC, SHIFT. 
// Mas em contra partida ele diferencia letras maiusculas das minusculas
/*
$('#form_login [name=username]').keypress(function(event){
    console.log(`você apertou a tecla com um código ${event.keyCode}`)
})
*/
