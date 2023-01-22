

// Removendo elementos
// $('.cars_list li').remove()

// Removendo o conteudo dos elementos
// $('.cars_list li').empty()


// Removendo um elemento, mas mantendo seus métodos associados 
// let txt = $('.paragrafo').detach()

// Removendo os elementos em volta de outro
// $('.cars_list li').unwrap()

$('.paragrafo').click(function(){
    $(this).html('você cliclou em mim')
})

let txt = $('.paragrafo').detach()

$('section main p').before(txt)