var pluck = require('whisk/pluck');
var mark = require('../helpers/mark-object');

module.exports = function(turndata) {
  var searchers = require('../helpers/search')(turndata);
  var notMyPlanets = searchers.notMyPlanets();
  var friendIds = searchers.friendIds();

  // iterate through my planet notes and reset to defaults
  notMyPlanets.forEach(function(planet) {
    if (planet.ownerid === 0) {
      mark(planet, 'planet', 'unowned');
    }
    else if (friendIds.indexOf(planet.ownerid) >= 0) {
      mark(planet, 'planet', 'friend');
    }
    else {
      mark(planet, 'planet', 'hostile');
    }
  });
};