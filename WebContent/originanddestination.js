	var app=angular.module("travelApp",[]);
	app.controller('travelCtrl',function($scope,$http){
	    
    	$http.get("/retrieveorigins")
        .then(function(response) {
        $scope.origindata = response.data;
        });
        
        $http.get("/retrievedestinations")
        .then(function(response) {
        $scope.destinationdata = response.data;
        });
        
        
		
		$scope.selectorigin=function(string){
			
			var output=[];
			angular.forEach($scope.origindata,function(origin){
				if(origin.toLowerCase().indexOf(string.toLowerCase())>=0){
					output.push(origin);
				}
			});
			$scope.filterOrigin=output;
		}
		
		$scope.CalculateFare =function()
		{
		  $http.get('/fares/' + $scope.origin+$scope.destination).then(function(response){
		      $scope.fare = response.data;
		  });  
		}
		
		$scope.selectdestination=function(string){
			
			var destinationoutput=[];
			angular.forEach($scope.destinationdata,function(destination){
				if(destination.toLowerCase().indexOf(string.toLowerCase())>=0){
					destinationoutput.push(destination);
				}
			});
			$scope.filterDestination=destinationoutput;
		}
		
	
		$scope.fillTextboxForOrigin=function(string){
			$scope.origin=string;
			$scope.filterOrigin=null;
		}
		
		$scope.fillTextboxForDestination=function(string){
			$scope.destination=string;
			$scope.filterDestination=null;
		}
		
	
	});