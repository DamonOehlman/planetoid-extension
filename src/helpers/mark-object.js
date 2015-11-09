var curry = require('curry');
var settings = require('../data/settings');
var color = require('color');

module.exports = curry(function(target, targetType, status) {
  var statusColor = (settings.colors[targetType] || {})[status] || status;

  target.colorfrom = color(statusColor).hslString();
  target.colorto = color(statusColor).darken(0.5).desaturate(0.5).hslString();
});