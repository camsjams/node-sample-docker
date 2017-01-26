var favicon = require('serve-favicon');
var compression = require('compression');
var path = require('path');
var Express = require('express');

var pingController = require('./controllers/PingController');
var indexController = require('./controllers/IndexController');

var environment = process.env.NODE_ENV || 'development';
var config = {
	environment,
	isProduction: environment === 'production',
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 10001
};

const app = new Express();
app.use(compression());
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(Express.static(path.join(__dirname, 'static')));

// install controllers
app.use(pingController, indexController);

if (config.port) {
	app.listen(config.port, (err) => {
		if (err) {
			console.error(err);
		}

		console.info('==> Open http://%s:%s in a browser to view the app. production:',
			config.host,
			config.port,
			config.isProduction
		);
	});
} else {
	console.error('==> ERROR: No PORT environment variable has been specified, config:', config);
}
