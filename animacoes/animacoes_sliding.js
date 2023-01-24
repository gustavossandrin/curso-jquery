// Escondendo um elemento com efeito de sliding
// $('.courses_list .course_item_inner:eq(4)').slideUp(1500)

// Exibindo um elemento com efeito de sliding
// $('.courses_list .course_item_inner:eq(4)').slideDown(1500)

// Exibindo ou escondendo um elemento com efeito de 'sliding'
$('.btn_toggle_item').on('click', function(){
    $(this).prev('.course_item_inner').slideToggle( 3000, function(){
        console.log('deslizando')
    })
})