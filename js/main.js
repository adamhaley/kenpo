angular.module('Kenpo', [
	]).controller('mainCtrl',function($scope, $http){

		$scope.currentBelt = '';
		$scope.belts = [];

		$http.get('data/techniques.json')
  		.success(function(data){
  			
  			$scope.belts = data.belts;
			console.log(data);
  			
  		})
  		.error(function(data){
  		  console.log(data);	
  		});


  		$scope.setColor = function(color){
  			$scope.currentBelt = color;
  		}
  		
  		$scope.showVideo = function(link){
  			console.log(link);
  		}


	});