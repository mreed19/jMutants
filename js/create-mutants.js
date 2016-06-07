function createMutant(mutant) {
  $.post({
    url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
    data: {
      mutant: mutant
    },
    success: function(x) {
      alert(x);
    }
  });
}
