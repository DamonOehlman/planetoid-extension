var curry = require('curry');
var settings = require('../data/settings');
var color = require('color');

module.exports = curry(function(target, targetType, status) {
  var statusColor = (settings.colors[targetType] || {})[status];

  target.colorfrom = color(statusColor).darken(0.5).desaturate(0.5).hslString();
  target.colorto = color(statusColor).hslString();
});