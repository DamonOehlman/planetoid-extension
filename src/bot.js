var client = require('chromex/client')({
  target: 'planets.nu helper extension'
});

require('./monitors/build');
require('./monitors/tax');
require('./monitors/turndata')(client);