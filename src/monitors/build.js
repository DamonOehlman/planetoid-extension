var most = require('most');
var qsa = require('fdom/qsa');
var targetValues = require('../data/settings').buildTargets;
var idToSettingMapping = {
  TargetMines: 'mines',
  TargetFactories: 'factories'
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
    // NOTE: the DOM mutates between changes so we nede to find the new input (sigh)
    var realInput = document.getElementById(input.id);
    var targetValue = targetValues[idToSettingMapping[input.id]];

    if (targetValue !== undefined) {
      realInput.value = targetValue;
      realInput.dispatchEvent(new Event('change'));
    }
  })
  .observe(function(input) {
    console.log('updated ' + input.id + ' value');
  });