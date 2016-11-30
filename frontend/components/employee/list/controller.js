var controller;

controller = controller;

function controller(employee,$rootScope, $scope,shared,$mdDialog,$log){
	//define variable
	var vm; 

	//assign values
	vm = this;

	//assign methods to view
	vm.updateEmployee = updateEmployee;
	vm.removeEmployee = removeEmployee;

	//define listeners
	$scope.$on('updateEmployeeList', updateEmployeeList)
	$scope.$on('refreshEmployeeList', getEmployees)

	//execute methods
	getEmployees();

	//define methods
	function getEmployees(){
		employee.getEmployees()
			.then(processResponse)
			.catch(throwError)

		function processResponse(response){
			if(response.data)
				vm.employees = response.data
		}

		function throwError(err){
			console.log("Issue retrieving employees :: "+err)
		}
	}

	function updateEmployeeList(event,employee){
		return vm.employees.push(employee)
	}

	function updateEmployee(employee, event) {
		$rootScope.$broadcast('updateEmployee', employee);
		return shared.buildToggler('updateEmployee')();
	};	

    function removeEmployee(person, ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		var confirm = $mdDialog.confirm()
		      .title('Are you sure you want to delete this employee?')
		      .textContent('Once you delete this employee it cannot be undone.')
		      .ariaLabel('Lucky day')
		      .targetEvent(ev)
		      .ok('Delete Employee')
		      .cancel('Cancel');

		$mdDialog.show(confirm).then(function() {
		  	
			removeEmployee();

		  	function removeEmployee(){
				employee.removeEmployee(person)
					.then(processResponse)
					.catch(throwError)

				function processResponse(response){
					if(response)
						getEmployees()
				}

				function throwError(err){
					$log.debug(err)
				}	
		  	}
		}, function() {
		  console.log("no delete");
		});
	};
}

module.exports = controller;