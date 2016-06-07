$(document).on('click', 'a.delete', function(ev) {
  ev.preventDefault();
  var li = $(ev.currentTarget).closest('li');
  var id = li.attr('data-id');
  deleteMutant(id);
});

function deleteMutant(id) {
  $.ajax( {
    method: 'delete',
    url: 'https://mutant-school.herokuapp.com/api/v1/mutants' + '/' + id,
    success: function() {
      $('li[data-id=' + id +']').remove();
    }
  });
}
