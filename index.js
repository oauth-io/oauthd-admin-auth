module.exports = function(env) {
	var plugin = require('./bin/auth.js')(env);
	return plugin;
}