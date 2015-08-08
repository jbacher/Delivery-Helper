//api key AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
var parser = require('./models/parser')
module.exports = function(app) {

	app.get('/',function(req,res){
		//res.sendFile("./views/index.html", {root: __dirname})

		//WE MADE IT, YASSSSSSS

		res.sendFile("index.html", {root: __dirname+"/../views/"})
	}),
	//get call 
	app.get('/api/directions', function(req, res) {
		//here i get what was passed in on previous pages
		//res.send(parser(req.query))
		res.send(parser(req._parsedOriginalUrl.query))
	})
}