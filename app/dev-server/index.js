'use strict';

process.on('unhandledRejection', function(reason, p) {
  console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

require('babel-core/register');
var server = require('./main').default;

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Dev Server listening on', PORT);
});
