var app,bodyParser,cookieParser, config, express,http,morgan,mongoose,router,serveStatic;


//app configurations
config = require('./config');
express = require('express');
app = express();
router = express.Router();
bodyParser = require('body-parser');
http = require('http').Server(app);
serveStatic = require('serve-static');

//mongodb mongoose plugin module
mongoose = require('mongoose');

//connect to main database
mongoose.connect(`mongodb://${config.databaseServer}/${config.databaseName}`);
mongoose.connection.on('error', console.error.bind(console, 'DB connection error:'));
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to Test DB on ip --> ${config.databaseServer}/${config.databaseName}`);
});

//apply secret to all routes
router.all('/api/employee/*', checkSecret)

//app settings
app.set('port', process.env.PORT || 7770);
app.use('/',router)
app.use(bodyParser.json());
app.use(function(req, res, next) {
    var data='';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
       data += chunk;
    });

    req.on('end', function() {
        req.body = data;
        next();
    });
});


defineAPIRoutes();

app.use(serveStatic('./frontend', { index: "index.html" }));

startServer();

function defineAPIRoutes() {
  require('./routes/Get')(app);
  require('./routes/Post')(app);
  require('./routes/Delete')(app);
  require('./routes/Put')(app);
}


function startServer() {
  //start server
  http.listen(app.get('port'), function () {
    console.log("App Server up and running");
  });
}

function checkSecret(req,res,next){
	if(!req.headers.authorization || req.headers.authorization != config.secret)
		return res.send("You do not have access to this endpoint!")
	return next();
}