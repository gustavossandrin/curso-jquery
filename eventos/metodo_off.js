let entries = 100;

$('.register').append(`<u>Ainda restam ${100 - entries} vagas</u>`)

$('#form_login [type=submit]').on('click', function(e){
      e.preventDefault();
      alert('você foi cadastrado, parabens!!')
})

if (entries >= 100){
  $('#form_login [type=submit]').off('click');
}