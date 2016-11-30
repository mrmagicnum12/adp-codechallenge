var angular,component, controller, deps, factory;

setDependencies()

component = {
	controller : controller,
	template : `<md-button ng-click="$ctrl.addEmployee()" ng-hide="$ctrl.isOpenRight()" class="md-primary">
					New Employee
				</md-button>
				`
}

angular.module('adpApp.employee',deps)
.factory('employee',factory)
.component('employee',component)

function setDependencies(){
	deps = ['adpApp.employee.add','adpApp.employee.list','adpApp.employee.update']
	angular = require('angular');
	controller = require('./controller')
	factory = require('./factory')

	require('./add/index')
	require('./list/index')
	require('./update/index')
}