// Criando animações personalizadas
$('h1').animate({
    fontSize: '50px'
})

/*
$('.course_item h4').on('click', function(){
    $(this).animate({
        wordSpacing: '+=5px'
    })
})
*/

$('.course_item').on('click', function(){
    $(this).animate({
        padding: '+=20px'
    }, 2000)
})

$('footer p').on('click', function(){
    $(this).animate({
        letterSpacing: '+=10px'
    }, 1000, function(){
        alert('aumento o espaçamento das letras')
    })
})