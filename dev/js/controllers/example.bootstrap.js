App.controller('exampleController', ['$scope', '$modal',

  function($scope, $modal) {

	  console.log('big example page');
	  $scope.items = ['item1', 'item2', 'item3'];

	  $scope.open = function (size) {

	  var modalInstance = $modal.open({
	      templateUrl: 'partials/test.modal.html',
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
	    }, 
	    function () {
			console.log('modal instance done');
	    });
  };
  }
]);

App.controller('AccordionDemoCtrl', ['$scope',
	function($scope){
	
		console.log('Accordian control');
		$scope.oneAtATime = true;
		
		$scope.groups = [
		{
		  title: 'Dynamic Group Header - 1',
		  content: 'Dynamic Group Body - 1'
		},
		{
		  title: 'Dynamic Group Header - 2',
		  content: 'Dynamic Group Body - 2'
		}
		];
		
		$scope.items = ['Item 1', 'Item 2', 'Item 3'];
		
		$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
		};
		
		$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
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

/*
function AccordionDemoCtrl($scope) {


  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}\
*/