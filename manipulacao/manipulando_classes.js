 // Adicionando uma classe ao elemento
// $('header .menu ul li:last').addClass('stylized_menu')

// Removendo uma classe do elemento
// $('header .menu ul li:last').removeClass('stylized_menu')

// Alternando uma classe
// $(this).toggleClass('stylized_menu'); 
$('header .menu ul li a').click(function(event){
    event.preventDefault();
    $(this).toggleClass('stylized_menu');
})

// verificando se um elemento possui certa classe
// $('header .menu ul li a').hasClass('stylized_menu')

$('p').each(function(){
    if ($(this).hasClass('paragrafo')){
        $(this).append('<span style="color: red;"> - Eu tenho a classe paragrafo</span>')
    }
})
navigator.clipboard.writeText('testeee')