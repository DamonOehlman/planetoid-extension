var extension = require('chromex')({
  manifest: require('./manifest.json')
});

var monitorUrlPermissions = {
  urls: extension.getUrlPermissions()
};

function handleWebRequestCompleted(details) {
  if (details.url === 'http://api.planets.nu/game/loadturn') {
    extension.send('loadturn');
    console.log('loaded turn', details);
  }
}

chrome.webRequest.onCompleted.addListener(handleWebRequestCompleted, monitorUrlPermissions);