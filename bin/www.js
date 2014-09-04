#!/usr/bin/env node
var debug = require('debug')('EvalNode');
var app = require('../app');

app.set('port', process.env.PORT || 3000);
app.set('address',process.env.IP || "0.0.0.0");
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
