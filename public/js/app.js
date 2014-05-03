// App.js
// This is the main javascript file for this project.
var _DEBUG = true;

var App = angular.module('app', ['ngRoute']);

App.config(['$routeProvider',
	function($routeProvider){
	
		console.log('router');
		
	    $routeProvider.when('/', {
	        templateUrl: 'partials/home.html',
	        controller:  'HomeController' 
	 	 })
	 	 .otherwise({
	        redirectTo: '/'
	      });
  }]);




App.controller('HomeController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  console.log('Home Controller sss');
  }
]);