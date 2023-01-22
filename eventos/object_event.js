$('p').click(function(event){

    // retorna o tipo de evento executado
    // console.log('voce realizou um evento de ' + event.type)
    
    // Retorna o nome do elemento que clicamos
    // alert(`voce clicou em uma tag <${event.target.localName}>`)

    // console.log('TARGET', event.target);
    // console.log('CURRENT TARGET', event.currentTarget)
})

// Retorna a posição X e Y do elemento onde ocorreu o evento
// event.pageX, event.pageY

$('[name=bio]').keydown(function(event){
    // Retorna o código da tecla pressionada
    // console.log(event.keyCode);
    // console.log(event.which);

    // Retorna o nome da tecla selecionada
    // console.log(event.key);
    /*
    if (event.key == 'Enter'){
        event.preventDefault();
        alert('voce pressionou o enter')
    }
    */

    // Para a execução padrão do evento
    event.preventDefault();

    // Para a propagação de eventos
    event.stopPropagation();
})