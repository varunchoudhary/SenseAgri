var express = require('express');
app = express();
app.use(express.static('www'));
app.set('port',process.env.port||5000);
app.listen(app.get('port'),function(){
	console.log('express server is listening on port'+ app.get('port'));
}); 