$('[type=radio]').change(function(){
    let value = $('input:checked').val();
    let gender = (value == 'M') ? 'Masculino' : 'Feminino';

    alert(`Você escolheu o sexo ${gender}`)
})


$('#register :submit').click(function(event){

    event.preventDefault();
    console.log('Você clicou no botão submit')
})

// Selecionando um botão]
// $('#register :button').text('s')

// Selecionar um checkbox
// $('#register :checkbox').trigger('click')

// Selecionando os elementos checados
//  $('input:checked').val()

// Selecionando os elementos desabilitados
//$('#register :disabled').val('gustavosandrin@gmail.com').prop('disabled', false)

// Selecionando elementos com foco
//$('input').focus(function(){
//    $('input:focus').val('olá você clicou aqui');
//})

// Selecionando o botão submit
// $('#register :submit').css('background-color' , 'green')

