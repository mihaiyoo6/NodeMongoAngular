angular.module('myApp', []).
	controller('myController', function($scope){
		$scope.JSONObj = {title: "myTitle"},
		$scope.word = "SUpercalifragilisticepilalidocius";
		$scope.days = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday"];
	});