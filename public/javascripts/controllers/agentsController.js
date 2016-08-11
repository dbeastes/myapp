'use strict';
/** 
  * Agents Controller ( Data Grid )
*/
app.controller('agentsController', ["$scope", "$rootScope", "$http", "$location", 
function ($scope, $rootScope, $http, $location) {
	var path = $location.path();
	//var arrPath = path.split( '/' );
	var arrPath = window.location.pathname.split( '/' );
	for ( var i = 0; i < arrPath.length; i++ ) {console.log("param: " + arrPath[i])}
	var idVal = arrPath[3]; 
	if (idVal == "NEW") {
	
	} else {
	
	}
	 
}]);