$('#init_effect').on('click', function(){
    $('.logo').animate({
        marginTop: '+=90px',
        
    }, 2000)
    .delay(500)
    .animate({
        marginLeft: '+=300px'
    }).queue(function(){
        $('h1').text('animação concluida').css('color', 'red')
        $(this).dequeue();
    })
    /*
    .delay(1000)
    .fadeOut(2000);
    */
})

// Limpa a fila de animações
// clearQueue()

$('#stop_effect').on('click', function(){

    $('.logo').finish();
    // Parando uma animação
    // $('.logo').stop(true, true);
});