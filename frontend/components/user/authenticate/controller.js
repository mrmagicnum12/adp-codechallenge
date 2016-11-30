var controller;

controller = controller;

function controller(user,$log, shared, $location, $mdDialog){
	//define variable
	var vm; 

	//assign values
	vm = this;

	//assign methods to view methods
    vm.authenticate = authenticate;

	//define methods
    
    function authenticate(User){
    	if(!User)
    		return

    	user.setToken(User.password)

    	user.authenticate(User)
    		.then(processResponse)
    		.catch(throwError)

        function processResponse(response){
        	if(response.data){
        		$location.path('/listEmployees')
        	}else{
				 $mdDialog.show(
				      $mdDialog.alert()
				        .title('Invalid Access Code')
				        .textContent('Please Enter A Valid Passcode!')
				        .ariaLabel('Primary click demo')
				        .ok('OK')
				        .targetEvent(event)
				    );        		
        	}
        }

        function throwError(){
        	$log.debug("Issue with password.")
        }
    };


}

module.exports = controller;