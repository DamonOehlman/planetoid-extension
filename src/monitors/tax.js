var most = require('most');
var qsa = require('fdom/qsa');

most
  .fromEvent('click', document)
  .filter(function(evt) {
    return evt.target && evt.target.matches('.rNavRight');
  })
  .delay(100)
  .flatMap(function() {
    return most.from(qsa('td[data-topic]:nth-child(2)'));
  })
  .observe(function(cell) {
    console.log('got tax header cell: ', cell);
  });