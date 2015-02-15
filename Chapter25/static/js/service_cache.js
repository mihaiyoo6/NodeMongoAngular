var app = angular.module('myApp', []);
app.factory('MyCache', function($cacheFactory){
	return $chacheFactory('myCache', {capacity:5});
});
app.controller('myController', ['$scope', 'MyCache', 
	function($scope, cache){
		cache.put('myValue', 55);
	}]);
app.contorller.('myController2', ['$scope', 'MyCache',
	function($scope, cache){
		$scope.value = cache.get('myValue');
	}])