// App.js
// This is the main javascript file for this project.
var _DEBUG = true;

var App = angular.module('app', ['ngRoute', 
								'ngTouch',
								'ui.bootstrap'
						]);

App.config(['$routeProvider',
	function($routeProvider){
	
		console.log('router');
		
	    $routeProvider.when('/', {
	        templateUrl: 'partials/example.html',
	        controller:  'exampleController'
	 	 })
	 	 .otherwise({
	        redirectTo: '/'
	      });
  }]);
