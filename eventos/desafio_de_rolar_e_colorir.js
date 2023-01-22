$(window).scroll(function(){
    let position = $(window).scrollTop();

    let el;

    let sections = ['.title', '.books', '.register']
    let index 

    if (position < 50){
        index = 0
    }
    else if (position < 150){
        index = 1
    }
    else if (150 < position < 300){
        index = 2
    }


    $(sections[index]).addClass('selected_section')
    
    sections.splice(index, 1)

    $(sections.join(', ')).removeClass('selected_section')
})