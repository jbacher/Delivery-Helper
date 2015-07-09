//api key AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
module.exports = function(app) {
	//get call 
	app.get('/api/directions', function(req, res) {
		//here i get what was passed in on previous pages
		console.log('req')
		console.log(req)
	})
}