// Escondendo um Elemento
// $('.courses_list div:first').hide(2000)

// Exibindo um elemento
// $('.courses_list div:hidden').show('3000')

// Exibindo ou escondendo um elemento
// $('.courses_list .course_item:eq(2)').toggle(2000)

$('.btn_toggle_item').on('click', function(){
    $(this).prev('.course_item_inner').toggle
})