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
	        templateUrl: 'partials/home.html',
	        controller:  'HomeController' 
	 	 })
	 	 .when('/modal', {
	        templateUrl: 'partials/bootstrap.modal.html',
	        controller:  'ModalController' 
	 	 })
	 	 .otherwise({
	        redirectTo: '/'
	      });
  }]);




App.controller('ModalController', ['$scope', '$modal',

  function($scope, $modal) {

	  console.log('modal controller example 1');
	  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

	  var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
	
		//callback for when modal is closed
	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
			console.log('modal instance done');
	    });
  };
  
  }
]);

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
App.controller('HomeController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  console.log('Home Controller sss');
  }
]);