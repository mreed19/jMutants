var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, addMutant);
}

function addMutant(i, mutant) {
  console.log(mutant);
}

$.get({
  url: url,
  success:  loadMutants
});
