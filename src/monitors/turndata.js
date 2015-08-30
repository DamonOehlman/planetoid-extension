module.exports = function(client) {
  function monitorTurnData() {
    var turndata = require('../helpers/turndata');
    console.log('checking for turn data: ', turndata);

    // if (! turndata) {
    //   return setTimeout(monitorTurnData, 100);
    // }

    console.log(turndata && vgap.planets);
  }

  client.on('loadturn', function() {
    setTimeout(monitorTurnData, 100);
  });
}