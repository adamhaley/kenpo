angular.module('Kenpo', [
	]).controller('mainCtrl',function($scope, $http){

		$scope.currentBelt = '';
		$scope.belts = [];

		$http.get('data/techniques.json')
  		.success(function(data){

  			$scope.belts = data.belts;
			
        $http.get('data/kenpo-techs-hit.txt')
          .success((techniquesHit)=>{
            let techniquesDone = techniquesHit.split("\n");
            $scope.belts.forEach((belt,i) => {
              belt.techniques = belt.techniques.filter((tech)=>{
                return(!techniquesDone.includes(tech.name.toLowerCase()));
              });
              $scope.belts[i] = belt;
            });

            console.log($scope.belts);
          });

  			
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
