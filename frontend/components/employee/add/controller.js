var controller;

controller = controller;

function controller(employee, shared, $rootScope){
	//define variable
	var vm, toastPosition; 

	//assign values
	vm = this;
	vm.toastPosition = angular.extend({},toastPosition)

	//assign methods to view methods
	vm.addEmployee = addEmployee;
	vm.close = close

	//define methods
	function addEmployee(Employee){
		if(!Employee || !Employee.fName)
			return

		employee.addEmployee(Employee)
			.then(processResponse)
			.catch(throwError)

		function processResponse(response){
			if(response.data){
				udpdateEmployeeList(response.data) 
				return resetForm();
			}
		}

		function throwError(err){
			console.log("Issue adding employee :: "+err)
		}
	}

	function resetForm(){
		return vm.Employee = {};
	}

	function close(){
		return shared.close('addEmployee');
	}

	function udpdateEmployeeList(Employee){
		return $rootScope.$broadcast('updateEmployeeList', Employee) 
	}
}

module.exports = controller;