var matchme = require('matchme');
var pluck = require('whisk/pluck');

module.exports = function(turndata) {
  var myThings = matchme.filter('ownerid == ' + turndata.player.id);
  var notMyThings = matchme.filter('ownerid != ' + turndata.player.id);
  var searchers = {};

  searchers.myPlanets = function() {
    return turndata.planets.filter(myThings);
  };

  searchers.notMyPlanets = function() {
    return turndata.planets.filter(notMyThings);
  };

  searchers.friendIds = function() {
    return turndata.relations.filter(function(rel) {
      return rel.relationfrom >= 2;
    }).map(pluck('playertoid'));
  };

  return searchers;
};