//hella regex here 

//pizza place address: 107 mountain road, Pasadena, MD, 21122
//enter it in as: 107MountainRoad,Pasadena,MD
//sample: origin=107MountainRoad,Pasadena,MD&destination=Concord,MA&waypoints=Charlestown,MA|via:Lexington,MA&key=AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
//waypoints=optimize:true|...
var HOME = 107MountainRoad,Pasadena,MD;
var API_KEY = AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI
var beginning = https:maps.googleapis.com/maps/api/directions/json?origin=107MountainRoad,Pasadena,MD&107MountainRoad,Pasadena,MD&waypoints=optimize:true
//|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA&key=API_KEY
var end = "&key=AIzaSyBq08EhP5dAeEFdB78UNVuKmZExkIRAwJI"
var waypointsString = ""
function parseWaypoints(element) {
	var stringArr = element.split(', ')
	console.log(stringArr)	
	waypointsString+='|'
}
function getGoogleData(waypoints) {
	//create the url with strings
	waypointsString = waypoints.forEach(parseWaypoints);

}

//html form where you can keep adding routes and then delete them