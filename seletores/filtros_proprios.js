$.expr[':'].carsCentury21 = function(el){
    return ($(el).data('ano') > 2000);
}

// criando nosso proprio filtro
// $('.cars_list li:carsCentury21').css('background-color', 'blue')


$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){
    return function(el){

        return ($(el).data('ano') < year);
    }
})

// criando nosso proprio filtro com parametros
$('.cars_list li:carsBeforeYear(2000)').css('background-color', 'blue')