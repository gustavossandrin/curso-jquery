$('h1').on('dblclick', function(){
    $(this).text('Hcode Treinamentos')
})
 

// Adicionando um evento manualmente
$('h1').trigger('dblclick')

$('#form_login').on('submit', function(e){
    e.preventDefault();
    console.log('aqui estão os valores do formulario', $(this).serializeArray())
})

$('#form_login [name=bio]').on('blur', function(e){
    $(e.target.form).trigger('submit')
})