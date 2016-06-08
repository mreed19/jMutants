
$.get({
  url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
  success:  function(mutants) {
    $.each(mutants, function(i, mutant) {
    addMutant(mutant);
    });
  }
});

function addMutant(mutant) {
  var li = $('.template')
    .clone()
    .removeClass('template hide clearfix');
  li.find('.mutant-name').text(mutant.mutant_name);
  li.attr('data-id', mutant.id);
  $('#mutant_list').append(li);
}
