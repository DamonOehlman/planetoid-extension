var curry = require('curry');
var settings = require('../data/settings');

module.exports = curry(function(target, targetType, status) {
  var colors = (settings.colors[targetType] || {})[status];
  if (Array.isArray(colors)) {
    target.colorfrom = '#' + colors[0];
    target.colorto = '#' + colors[1];
  }
});