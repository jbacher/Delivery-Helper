//hella regex here 

//pizza place address: 107 mountain road, Pasadena, MD, 21122
//enter it in as: 107MountainRoad,Pasadena,MD
//sample: origin=107MountainRoad,Pasadena,MD&destination=Concord,MA&waypoints=Charlestown,MA|via:Lexington,MA&key=AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
//waypoints=optimize:true|...
//full url example https://maps.googleapis.com/maps/api/directions/json?origin=107MountainRoad,Pasadena,MD&destination=Concord,MA&waypoints=optimize:true|Charlestown,MA|Miama,FL&key=AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
var HOME = '107MountainRoad,Pasadena,MD;'
var API_KEY = 'AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI'
var beginning = 'https://maps.googleapis.com/maps/api/directions/json?origin=107MountainRoad,Pasadena,MD&destination=107MountainRoad,Pasadena,MD&waypoints=optimize:true'
//|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA&key=API_KEY
var end = "&key=AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI"
var waypointsString = ""
function parseWaypoints(element) {
	var stringArr = element.split(',')
	console.log(stringArr)	
	waypointsString+='|'+stringArr[0]+','+stringArr[1]+','+stringArr[2]
	console.log('waypointsString' + waypointsString)
}
function getGoogleData(waypointsRaw) {
	var answer = []
	//will come in as [NumStreet,City,STATE]

	//create the url with strings
	// waypointsString = waypoints.forEach(parseWaypoints);
	var fullRequest = beginning+waypointsRaw+end
	console.log(fullRequest)
	$.ajax(fullRequest, {
		dataType: "json", //might be jsonp
		async : false,
		success: function (data) {
			console.log('success')
			console.log(data.routes.waypoint_order)
			answer = data.routes.waypoint_order
		},
		error : function (e) {
			console.log("ERROR")
			console.log(e)
		}
	})

	return answer;

}

module.exports = getGoogleData
//html form where you can keep adding routes and then delete them
