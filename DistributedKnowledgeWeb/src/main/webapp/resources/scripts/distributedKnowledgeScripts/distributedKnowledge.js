var distributedKnowledge = angular.module('DistributedKnowledge',['ngRoute',
                                                                  'ngSanitize',
                                                                  'ngCookies',
                                                                  'ngAnimate',
                                                                  'ngSanitize',
                                                                  'mgcrea.ngStrap']);

distributedKnowledge.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
	
		when('/login',{templateUrl: 'views/partials/login.html', controller: 'LoginController', routeName: 'login'}).
		otherwise({templateUrl: 'views/partials/home.html', controller: 'HomeController', routeName: 'home'});
	
}]);


distributedKnowledge.config(['$modalProvider',function($modalProvider){
	angular.extend($modalProvider.defaults, { html : true});
}]);


distributedKnowledge.constant('USER_ROLES', {
    all: '*',
    admin: 'ROLE_ADMIN',
    user: 'ROLE_USER'
});


distributedKnowledge.factory('ClientSideSession',[function(){
	
	this.create = function(userName,firstName,lastName,userRole){
		
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userRole = userRole;
	};
	
	this.invalidateSession = function(){
		
		this.userName = null;
		this.firstName = null;
		this.lastName = null;
		this.userRole = null;
	};
	
	return this;
	
}]);


distributedKnowledge.factory('ClientSideAccount',['$resource','$http',function($resource,$http){
	
	return {
		
		getAccount : $resource('user/account', {} , {
			get : {method:'GET', isArray: false}
		}),
		
		isAuthenticated : $resource('user/authenticated', {} , {
			get : {method:'GET', isArray: false}
		}),
		
		changePassword : $resource('user/changePassword', {}, {
			post : {method:'POST'}
		}),
		
		changeProfileInfo : $resource('user/changeProfileInfo', {}, {
			post : {method:'POST'}
		})
		
	};
	
}]);



distributedKnowledge.factory('ClientSideAuthentication',['$rootScope','$scope','$http','$location','$cookieStore','ClientSideSession','ClientSideAccount','USER_ROLES',
                                                         function($rootScope,$scope,$http,$location,$cookieStore,ClientSideSession,ClientSideAccount,USER_ROLES){
	
	return {
		
		login : function(data){
			$http.post('user/authenticate', data , {
				headers : {
					"Content-Type": "application/json"
				}
			}).success(function (data, status, headers, config){
				
				$rootScope.status = status;
				$rootScope.notification = null;
				$cookieStore.put('authenticated',true);
				ClientSideAccount.getAccount.get(function succes(data){
					
					var session = ClientSideSession.create(data.userName,
														   data.firstName,
														   data.lastName,
														   data.userRole);
					
					$cookieStore.put('sessionData',session);
					
				});
				
			}).error(function (data, status, headers, config){
				
			});
			
		}
	};
}]);



distributedKnowledge.controller('GlobalController',['$scope','$location','$modal',function($scope,$location,$modal){
	
	$scope.dataObject = {};
	$scope.functionObject = {};
	
	$scope.customLoginModal = $modal({
		
		scope : $scope,
		template : 'views/partials/login.html',
		show : false
		
	});
	
	$scope.functionObject.setRoute = function(routeLocation){
		
		$location.path(routeLocation);
		
	};
	
	$scope.functionObject.showLoginModal = function(){
		
		$scope.customLoginModal.$promise.then($scope.customLoginModal.show);
	};
	
	$scope.functionObject.hideLoginModal = function(){
		
		$scope.customLoginModal.$promise.then($scope.customLoginModal.hide);
	};
	
}]);
