var app = angular.module('myApp', ['ngCookies']);
	app.controller('myController', ['$scope', '$cookieStore',
		function($scope, cookieStore) {
			$scope.favCookie = '';
			$scope.myFavCookie = '';
			$scope.setCookie = function(){
				if ($scope.favCookie === 'None'){
					cookieStore.remove('myAppCookie_test');
				}else{
					cookieStore.put('myAppCookie_test', {flavor:$scope.favCookie});
				}
				$scope.myFavCookie = cookieStore.get('myAppCookie_test');
			};
		}]);