var angular, deps, jQuery;

setDependencies();
startApp();


//start app
function startApp(){
	angular.module('adpApp',deps)
		.config(config)
}

function setDependencies(){
	deps = ['ngMaterial','ngAnimate','ngMessages','ngResource','ngRoute','adpApp.employee', 'adpApp.shared','adpApp.user'];
	angular = require('angular');

	require('angular-material')
	require('angular-animate')
	require('angular-messages')
	require('angular-resource')
	require('angular-route')

	require('./components/employee/index')
	require('./components/shared/index')
	require('./components/user/index')

}

function config($mdThemingProvider, $routeProvider, $httpProvider){
	$mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

    //api request
    $httpProvider.interceptors.push('authInterceptor');  
    
    //routes
    $routeProvider.when('/authenticate',{templateUrl : "./components/user/index.html"})
    $routeProvider.when('/listEmployees',{templateUrl : "./components/employee/index.html"})
    $routeProvider.otherwise('/authenticate')

}

