var angular,component, controller, deps, factory;

setDependencies()

component = {
	controller : controller,
	template : ``
}

angular.module('adpApp.user',deps)
.factory('user',factory)
.component('user',component)

function setDependencies(){
	deps = ['adpApp.user.authenticate']
	angular = require('angular');
	controller = require('./controller')
	factory = require('./factory')

	require('./authenticate/index')
}