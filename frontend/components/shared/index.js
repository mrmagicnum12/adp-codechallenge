var angular,factoryAngularDesign, factoryInterceptor;

setDependencies()

angular.module('adpApp.shared',[])
.factory('shared',factoryAngularDesign)
.factory('authInterceptor',factoryInterceptor)

function setDependencies(){
	angular = require('angular');
	factoryAngularDesign = require('./factory-angular-design')
	factoryInterceptor = require('./factory-interceptor')
}