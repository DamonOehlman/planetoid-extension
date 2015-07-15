var most = require('most');
var qsa = require('fdom/qsa');

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
  .observe(function(input) {
    console.log('found input: ', input);
  });