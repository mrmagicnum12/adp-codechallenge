var angular,component, controller;

angular = require('angular');
controller = require('./controller');

component = {
	controller : controller,
	template : `<md-list>
					<md-subheader class="md-no-sticky">All Employees</md-subheader>
				  	<md-list-item ng-repeat="person in $ctrl.employees" ng-click="$ctrl.updateEmployee(person)" class="noright">
				    <img alt="{{ person.fName }}" ng-src="https://48jwh53mcwj217jvx11dcwjj-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/avatar-2.jpg" class="md-avatar" />
				    <p>{{ person.fName }} {{ person.lName }} | {{person.title}}</p>
				    <md-icon class="md-secondary" ng-click="$ctrl.removeEmployee(person,$event)" aria-label="Chat">delete_forever</md-icon>
				  	</md-list-item>
				</md-list>
				`
}


angular.module('adpApp.employee.list',[])
.component('employeeList', component)

