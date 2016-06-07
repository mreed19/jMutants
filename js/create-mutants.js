$('#new_mutant').on('submit', function(ev) {
  ev.preventDefault();
  createMutant({
    mutant_name: this.mutantName.value,
    real_name: this.realName.value,
    power: this.power.value
  });
});

function createMutant(mutant) {
  $.post({
    url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
    data: {
      mutant: mutant
    },
    success: function(mutant) {
      addMutant(mutant);
    }
  });
}
