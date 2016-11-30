var angular,component, controller;

angular = require('angular');
controller = require('./controller');

component = {
	controller : controller,
	template : `
			    <md-sidenav class="md-sidenav-left md-whiteframe-4dp" md-component-id="updateEmployee">

			      <md-toolbar class="md-theme-light">
			        <h1 class="md-toolbar-tools">Employee Info</h1>
			      </md-toolbar>
			      <md-content layout-padding>
				<form name="employeeForm">
			      <md-input-container class="md-block">
				        <label>Title</label>
				        <input md-maxlength="30" required md-no-asterisk name="title" ng-model="$ctrl.Employee.title">
				        <div ng-messages="employeeForm.title.$error">
				          <div ng-message="required">This is required.</div>
				          <div ng-message="md-maxlength">The title must be less than 30 characters long.</div>
				        </div>
				      </md-input-container>

				      <div layout="row">
				        <md-input-container flex="50">
				          <label>First Name</label>
				          <input required name="fName" ng-model="$ctrl.Employee.fName">
				          <div ng-messages="employeeForm.fName.$error">
				            <div ng-message="required">This is required.</div>
				          </div>
				        </md-input-container>
				        <md-input-container flex="50">
				          <label>Last Name</label>
				          <input required name="lName" ng-model="$ctrl.Employee.lName">
				          <div ng-messages="employeeForm.lName.$error">
				            <div ng-message="required">This is required.</div>
				          </div>
				        </md-input-container>
				      </div>
				      <div layout="row">
				        <md-input-container flex="50">
				          <label>Department</label>
				          <md-select name="department" ng-model="$ctrl.Employee.department" required>
				            <md-option value="app">Application</md-option>
				            <md-option value="web">Website</md-option>
				          </md-select>
				        </md-input-container>
				      </div>
				      <md-input-container class="md-block">
				        <label>Email</label>
				        <input required type="email" name="email" ng-model="$ctrl.Employee.email"
				               minlength="10" maxlength="100" ng-pattern="/^.+@.+\..+$/" />

				        <div ng-messages="employeeForm.email.$error" role="alert">
				          <div ng-message-exp="['required', 'minlength', 'maxlength', 'pattern']">
				            Your email must be between 10 and 100 characters long and look like an e-mail address.
				          </div>
				        </div>
				      </md-input-container>

				      <div>
				        <md-button type="submit" ng-click="$ctrl.updateEmployee($ctrl.Employee)">SAVE</md-button>
				        <md-button ng-click="$ctrl.close()" class="md-primary">CLOSE</md-button>
				      </div>
				    </form>
			      </md-content>
			    </md-sidenav>

				`}

angular.module('adpApp.employee.update',[])
.component('employeeUpdate', component)

