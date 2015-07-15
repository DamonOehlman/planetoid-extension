var most = require('most');
var qsa = require('fdom/qsa');
var defaultValues = {
  TargetMines: 500,
  TargetFactories: 500,
  TargetDefense: 100
};

most
  .fromEvent('click', document)
  .filter(function(evt) {
    return evt.target &&
      evt.target.matches('.SepButton') &&
      evt.target.textContent === 'Build';
  })
  .delay(100)
  .flatMap(function() {
    return most.from(qsa('#BuildingScreen input[type="text"]'));
  })
  .filter(function(input) {
    return input.value === '0';
  })
  .tap(function(input) {
    var changeEvent = document.createEvent('HTMLEvents');

    input.value = defaultValues[input.id];

    changeEvent.initEvent('change');
    input.dispatchEvent(changeEvent);
  })
  .observe(function(input) {
    console.log('updated ' + input.id + ' value');
  });