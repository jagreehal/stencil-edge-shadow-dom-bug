const path = require('path');

exports.config = {
  namespace: 'stencil-app',
  outputTargets: [{
    type: 'www',
    serviceWorker: false
  }, {
    type: 'dist',
    serviceWorker: false
  }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};