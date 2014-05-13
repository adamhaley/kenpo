angular.module('Kenpo', [
	]).controller('mainCtrl',function($scope, $http){

		$scope.belts = [];

		$http.get('data/techniques.json')
  		.success(function(data){
  			
  			$scope.belts = data.belts;
			console.log(data);
  			
  		})
  		.error(function(data){
  		  console.log(data);	
  		});

	});