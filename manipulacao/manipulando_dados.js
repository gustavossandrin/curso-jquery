// Removendo dados do elemento, OBS: só é possivel remover datas criadas pelo jquery
// $('.cars_list li:first').removeData('pais')

// retornando ou definindo o dado de um elemento
// $('.cars_list li:first').data('ano', '3000')

$('.cars_list li').click(function(){
    console.log($(this).data('ano'))
})
