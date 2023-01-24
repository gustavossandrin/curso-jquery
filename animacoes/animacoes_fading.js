// Escondendo um elemento com a animação 'fading'
//$('.courses_list .course_item_inner:eq(3)').fadeOut(2000) 

// Exibindo um elemento com a animação 'fading'
$('.courses_list .course_item_inner:eq(3)').fadeIn(2000, function(){
    $(this).css('border', 'solid')
}) 

// Alterando a opacidade de um elemento com uma animação
// $('.logo img').fadeTo(1000, 0.5) 

$('.btn_toggle_item').on('click', function(){
    $(this).prev('.course_item_inner').fadeToggle('slow', function(){
        console.log('sumi ou apareci')
    })
})