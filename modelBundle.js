var fs = require('fs');

//load all files in models dir:
fs.readdirSync(__dirname + '/models').forEach(function(filename){
 if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});
