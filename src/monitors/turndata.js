module.exports = function(client) {
  function handleTurnLoaded() {
    var turndata = require('../helpers/turndata');
    console.log('checking for turn data: ', turndata);

    if (! turndata) {
      return;
    }

    require('../modifiers/unowned-planet-notes')(turndata);
    require('../modifiers/mark-planets')(turndata);
  }

  client.on('loadturn', function() {
    setTimeout(handleTurnLoaded, 100);
  });
}