//api key AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
var parser = require('./models/parser')
module.exports = function(app) {

	app.get('/',function(req,res){
		console.log("TESTING")
		res.send('HELLO WORLD')
	}),
	//get call 
	app.get('/api/directions', function(req, res) {
		//here i get what was passed in on previous pages
		//res.send(parser(req.query))
		res.send(parser(req._parsedOriginalUrl.query))
	})
}