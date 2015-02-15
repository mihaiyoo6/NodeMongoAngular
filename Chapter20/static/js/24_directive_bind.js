angular.module('myApp', []).
	controller('myController', function($scope){
		$scope.colors = ['red', 'green', 'blue'];
		$scope.myStyle = {'backgroun-color' : "blue"};
		$scope.days =['Monday', "Tuesday", "Wednesday", "Thursday", "Friday"];
		$scope.msg = "Mesage from Model";
	});