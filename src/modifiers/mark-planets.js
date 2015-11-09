var pluck = require('whisk/pluck');
var mark = require('../helpers/mark-object');

function getPlanetColor(planet, turndata) {
  var starbase = planet.isbase && turndata.mystarbases.filter(function(sb) {
    return sb.planetid === planet.id;
  })[0];

  if (starbase) {
    console.log('found starbase');
    return '#7f2aff';
  }

  return '#2ad4ff';
}

module.exports = function(turndata) {
  var searchers = require('../helpers/search')(turndata);
  var friendIds = searchers.friendIds();

  // iterate through my planet notes and reset to defaults
  turndata.planets.forEach(function(planet) {
    if (planet.ownerid === 0) {
      mark(planet, 'planet', 'unowned');
    }
    else if (planet.ownerid === turndata.player.id) {
      mark(planet, 'planet', getPlanetColor(planet, turndata));
    }
    else if (friendIds.indexOf(planet.ownerid) >= 0) {
      mark(planet, 'planet', 'friend');
    }
    else {
      mark(planet, 'planet', 'hostile');
    }
  });
};