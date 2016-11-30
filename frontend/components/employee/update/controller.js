var controller;

controller = controller;

function controller(employee,$scope,shared,$rootScope){
	//define variable
	var vm; 

	//assign values
	vm = this;

	//assign methods to view methods
	vm.updateEmployee = updateEmployee;
	vm.close = close

	//define listeners
	$scope.$on('updateEmployee',setEmployeeToUpdate)

	//define methods
	function updateEmployee(Employee){
		employee.updateEmployee(Employee)
			.then(processResponse)
			.catch(throwError)

		function processResponse(response){
			if(response.data)
				return refreshEmployeeList()
			
		}

		function throwError(err){
			console.log("Issue adding employee :: "+err)
		}
	}

	function refreshEmployeeList(){
		return $rootScope.$broadcast('refreshEmployeeList') 
	}

	function setEmployeeToUpdate(event,employee){
		resetForm();
		vm.Employee = employee;
	}

	function close(){
		return shared.close('updateEmployee');
	}

	function resetForm(){
		return vm.Employee = {};
	}

}

module.exports = controller;