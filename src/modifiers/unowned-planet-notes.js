var pluck = require('whisk/pluck');

module.exports = function(turndata) {
  var searchers = require('../helpers/search')(turndata);
  var myPlanetIds = searchers.myPlanets().map(pluck('id'));
  var notMyPlanetNotes = turndata.notes.filter(function(note) {
    return note.targettype === 1 && myPlanetIds.indexOf(note.targetid) < 0;
  });

  // iterate through my planet notes and reset to defaults
  notMyPlanetNotes.forEach(function(note) {
    note.color = '';
    note.body = '';
  });
};