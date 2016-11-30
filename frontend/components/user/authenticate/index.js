var angular,component, controller;

setDependencies()

component = {
	controller : controller,
	template : `<div class="authenticate">
					<form name="accessForm">
						<md-input-container>
					          <label>Username</label>
					          <input required type="text" name="username" ng-model="$ctrl.User.username">
						</md-input-container>
						<md-input-container>
					          <label>Passcode</label>
					          <input required type="password" name="password" ng-model="$ctrl.User.password">
						</md-input-container>
						<br/>
				        <md-button type="submit" ng-click="$ctrl.authenticate($ctrl.User)">Log Me In</md-button>
					</form>
				</div>
				`
}

angular.module('adpApp.user.authenticate',[])
.component('userAuthenticate',component)

function setDependencies(){
	angular = require('angular');
	controller = require('./controller')
}
