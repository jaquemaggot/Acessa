var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
//Permite usar os verbos(get,set);
var methodOverride = require('method-override');
//permitir acesso cruzado, eu em um servidor acessando outro.
var cors = require('cors');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');


module.exports = function () {
  var app = express();
  //var router = express.Router();

  app.set('port', global.config.port);
  app.set('ip', global.config.ip);

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  //se estiver tudo ok pong
  app.all('/ping', (req,res)=>{
    res.send( {pong:'ok'} );
  });


  app.use(cookieParser());
  app.use(session({
    //Coloque sua própria secreta aqui
    secret : 'A estrada até aqui',
    resave : true,
    saveUninitialized : true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  //cdw = change working directory
  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);
  return app;
};