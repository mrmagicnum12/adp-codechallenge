var controller;

controller = controller;

function controller($mdSidenav,$timeout,$log, shared){
	//define variable
	var vm; 

	//assign values
	vm = this;

	//assign methods to view methods
    vm.addEmployee = shared.buildToggler('addEmployee');
    vm.isOpenRight = function(){
      return $mdSidenav('addEmployee').isOpen();
    };

	//define methods
}

module.exports = controller;