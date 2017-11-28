require('./config/config');
var http = require('http');
var express = require('./config/express');

db = require('./config/database');
var passport = require('./config/passport');

db(global.config.mongoDb.connectionString());

app = express();
passport();

http.createServer(app).listen( app.get('port'),  app.get('ip'),()=> {
      console.log('Express Server escutando na porta ' + app.get('port'));
   }
);