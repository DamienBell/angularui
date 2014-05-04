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