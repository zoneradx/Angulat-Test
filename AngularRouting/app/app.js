//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/ProfileView', {
				templateUrl: 'templates/profile.html',
				controller: 'ProfileView'
			}).
			when('/messages', {
				templateUrl: 'templates/messages.html',
				controller: 'messages'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);


sampleApp.controller('ProfileView', function($scope) {

	$scope.message = 'This is Profile screen';

});


sampleApp.controller('messages', function($scope) {

	$scope.message = 'This is Messages screen';

});